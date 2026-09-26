#!/usr/bin/env bun

/**
 * Generates the voiceover for the Why Chobble reel.
 *
 * Each slide's `narration` text is spoken once through OpenRouter's audio
 * model, downloaded as streamed pcm16 audio, and stored as a WAV file under
 * `.video-narration/`. The measured lengths are written to the committed
 * `scripts/why-chobble-durations.json` baseline, which the scene builder
 * reads to time the video, so a render never needs the API key. Files
 * already present are skipped, so a re-run only pays for new or
 * `--force` requested lines.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { path } from "../utils.js";
import { WHY_CHOBBLE_SLIDES } from "../why-chobble-slides.js";

const OUTPUT_DIRECTORY = path(".video-narration");
const DURATIONS_FILE = path("scripts", "why-chobble-durations.json");
const VOICE = "echo";
const SYSTEM_PROMPT =
  "You are the voiceover for a short promotional video about event " +
  "ticketing. Speak warmly and clearly at a steady, engaging pace, like a " +
  "person explaining why they built something. Read the user's text " +
  "exactly as written. Do not add or change any words.";

const SAMPLE_RATE = 24_000;
const BYTES_PER_SAMPLE = 2;
const CHANNELS = 1;

const findApiKey = () => {
  const fromEnv = process.env.OPENROUTER_API_KEY;
  if (fromEnv) return fromEnv;
  try {
    return readFileSync("/run/secrets/openrouter_api_key", "utf8").trim();
  } catch {
    throw new Error(
      "Set OPENROUTER_API_KEY or provide /run/secrets/openrouter_api_key.",
    );
  }
};

const wavHeader = (pcmBytes) => {
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + pcmBytes, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(CHANNELS, 22);
  header.writeUInt32LE(SAMPLE_RATE, 24);
  header.writeUInt32LE(SAMPLE_RATE * BYTES_PER_SAMPLE * CHANNELS, 28);
  header.writeUInt16LE(BYTES_PER_SAMPLE * CHANNELS, 32);
  header.writeUInt16LE(16, 34);
  header.write("data", 36);
  header.writeUInt32LE(pcmBytes, 40);
  return header;
};
const appendAudioFromLine = (line, chunks) => {
  if (!line.startsWith("data: ") || line.slice(6) === "[DONE]") return;
  const data = JSON.parse(line.slice(6));
  if (data.error) throw new Error(data.error.message);
  const encoded = data.choices?.[0]?.delta?.audio?.data;
  if (encoded) chunks.push(Buffer.from(encoded, "base64"));
};

const speak = async (apiKey, text) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      headers: {
        authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        model: "openai/gpt-audio",
        modalities: ["text", "audio"],
        audio: { format: "pcm16", voice: VOICE },
        stream: true,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: text },
        ],
      }),
    },
  );
  if (!response.ok || !response.body) {
    throw new Error(`OpenRouter TTS failed: ${response.status}`);
  }
  const chunks = [];
  let pending = "";
  for await (const chunk of response.body) {
    pending += new TextDecoder().decode(chunk);
    const lines = pending.split("\n");
    pending = lines.pop() ?? "";
    for (const line of lines) appendAudioFromLine(line, chunks);
  }
  return Buffer.concat(chunks);
};

const wavDurationSeconds = (wavBytes) =>
  (wavBytes.length - 44) / (SAMPLE_RATE * BYTES_PER_SAMPLE * CHANNELS);

const speakSlide = async (apiKey, slide, force) => {
  const outputFile = join(OUTPUT_DIRECTORY, `${slide.slug}.wav`);
  if (!force) {
    try {
      readFileSync(outputFile);
      console.log(`${slide.slug}: audio already present, skipping`);
      return;
    } catch {
      // Fall through and generate it.
    }
  }
  console.log(`${slide.slug}: generating`);
  const pcm = await speak(apiKey, slide.narration);
  if (pcm.length === 0) throw new Error(`No audio for ${slide.slug}.`);
  writeFileSync(outputFile, Buffer.concat([wavHeader(pcm.length), pcm]));
};

const measuredDurations = () => {
  const durations = {};
  for (const slide of WHY_CHOBBLE_SLIDES) {
    durations[slide.slug] = wavDurationSeconds(
      readFileSync(join(OUTPUT_DIRECTORY, `${slide.slug}.wav`)),
    );
  }
  return durations;
};

const main = async () => {
  const force = process.argv.includes("--force");
  const apiKey = findApiKey();
  mkdirSync(OUTPUT_DIRECTORY, { recursive: true });

  for (const slide of WHY_CHOBBLE_SLIDES) {
    await speakSlide(apiKey, slide, force);
  }

  const durations = measuredDurations();
  writeFileSync(DURATIONS_FILE, `${JSON.stringify(durations, null, 2)}\n`);
  const total = Object.values(durations).reduce((sum, n) => sum + n, 0);
  console.log(`Narration total: ${total.toFixed(1)}s across slides.`);
};

main();

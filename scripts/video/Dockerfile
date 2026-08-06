FROM oven/bun:1.3.11

RUN apt-get update && apt-get install --no-install-recommends -y \
  libasound2 \
  libatk-bridge2.0-0 \
  libatk1.0-0 \
  libcairo2 \
  libcups2 \
  libdbus-1-3 \
  libgbm-dev \
  libnss3 \
  libpango-1.0-0 \
  libxcomposite1 \
  libxdamage1 \
  libxfixes3 \
  libxkbcommon-dev \
  libxrandr2 \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json bun.lock ./
COPY chobble-template/packages/js-toolkit ./chobble-template/packages/js-toolkit
RUN bun install --frozen-lockfile && bunx remotion browser ensure

COPY assets/fonts ./assets/fonts
COPY .video-build ./.video-build
COPY scripts/chobblefest-slides.js ./scripts/chobblefest-slides.js
COPY scripts/video ./scripts/video
COPY remotion.config.js ./remotion.config.js

ENTRYPOINT ["bunx", "remotion"]
CMD ["render", "ChobbleFestReel", "videos/chobblefest-reel.mp4"]

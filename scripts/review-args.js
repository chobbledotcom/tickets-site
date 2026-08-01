/**
 * Argument parsing shared by the two review commands, which read the same
 * shape: some names to report on, and options that must be spelled right.
 *
 * The spelling matters more here than in most commands. Both of these record
 * that a person read two things together, so an option quietly dropped as
 * unrecognised would print the report, exit 0 and record nothing, leaving the
 * reader believing they had accepted a pair that is still stale.
 */
export const parseOptions = (argv, options, { valued = [] } = {}) => {
  const unknown = argv.filter(
    (arg) => arg.startsWith("-") && !options.includes(arg),
  );
  if (unknown.length > 0) {
    throw new Error(
      `Unknown option(s): ${unknown.join(", ")}. Known: ${options.join(", ")}.`,
    );
  }
  // An option that was not passed indexes at -1, and -1 + 1 is the first
  // argument, so leaving it in would swallow the name in `--accept` alone.
  const valueIndexes = valued
    .map((option) => argv.indexOf(option))
    .filter((index) => index !== -1);
  return {
    flags: Object.fromEntries(options.map((o) => [o, argv.includes(o)])),
    names: argv.filter(
      (arg, index) =>
        !arg.startsWith("-") &&
        !valueIndexes.some((valueIndex) => valueIndex + 1 === index),
    ),
    valueOf: (option) => {
      const index = argv.indexOf(option);
      return index === -1 ? null : argv[index + 1];
    },
  };
};

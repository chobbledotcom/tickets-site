export const parseFromArgument = (args) => {
  if (args.length !== 2 || args[0] !== "--from" || !args[1]) {
    throw new Error("Usage: --from <artifact-dir>");
  }
  return args[1];
};

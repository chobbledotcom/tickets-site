const sortValue = (value) => {
  if (Array.isArray(value)) return value.map(sortValue);
  if (typeof value !== "object" || value === null) return value;
  return Object.fromEntries(
    Object.keys(value)
      .sort()
      .map((key) => [key, sortValue(value[key])]),
  );
};

export const serialise = (value) =>
  `${JSON.stringify(sortValue(value), null, 2)}\n`;

export const singleOrPlural = (str: string, count: number) =>
  count === 1
    ? str
    : `${str}s`;

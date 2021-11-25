export const camelCase = (str: string): string => {
  return str.replace(/[_.-]+(\w|$)/g, (_, x) => x.toUpperCase())
}

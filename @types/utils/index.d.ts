type ObjectKeys<T> =
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends object ? (keyof T)[] : T extends number ? [] : T extends Array<unknown> | string ? string[] : never
interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>
}

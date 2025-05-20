export function generateID(): string {
  return Math.random().toString().substring(2, 9) + '' + new Date().getTime();
}

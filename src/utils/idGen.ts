export default function (suffix = ''): string {
  return `ALCHEMI__${Math.random().toString().slice(2, 8)}___ID_${suffix}`
}

export const parseDuraiton = (duration: number): string => {
  const d = Math.floor(duration / 1000)
  const minT = Math.floor(d / 60) >= 10 ? Math.floor(d / 60) : '0' + Math.floor(d / 60)
  const minS = Math.floor(d % 60) >= 10 ? Math.floor(d % 60) : '0' + Math.floor(d % 60)
  return minT + ':' + minS
}
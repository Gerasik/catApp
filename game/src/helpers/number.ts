export const splitAndJoinNumberFromEnd = (number: number) => {
  const numberString = number.toString()
  const splitNumber = []
  for (let i = numberString.length; i > 0; i -= 3) {
    splitNumber.unshift(numberString.substring(Math.max(0, i - 3), i))
  }
  return splitNumber.join(" ")
}

export const formatNumber = (number: number) => {
  const suffixes = ["", "K", "M", "B", "T"]
  let suffixIndex = 0
  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000
    suffixIndex++
  }
  return number.toFixed(3) + " " + suffixes[suffixIndex]
}

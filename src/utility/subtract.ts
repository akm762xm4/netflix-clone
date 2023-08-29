import { formatNumber } from "./formatNumber"

export const subtract = (num1: any, num2: any) => {
  let ans = num1 - num2
  let res = formatNumber(ans, 2)
  if (ans < 0) {
    return `${res}`
  }
  return `+${res}`
}

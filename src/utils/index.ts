export const sum = (data: any[]) => {
  let sum = 0
  data.forEach((item) => (sum = sum + Number(item.price)))
  console.log(sum)
  return sum
}
export const numberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const array: string[] = ['hello', 'new', 'world']

const x = 10
const y = 2

const multi = (a: number, b: number): string => {
  const m: number = a ** b
  if (m > 100) {
    return 'めちゃでかい'
  }
  return '普通'
}

console.log(multi(x, y), array)

const array: string[] = ["hello", "new", "world"]

const x: number = 10
const y: number = 2

const multi = (a:number,b:number): string => {
  const m: number = Math.pow(a, b) 
  if(m > 100) return 'めちゃでかい'
}
 
console.log(multi(x,y))
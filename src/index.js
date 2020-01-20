// import '@babel/polyfill';
const isHas = [1, 2, 3].includes(2);
console.log(isHas);
const p = () => { 
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}
async function myFunc() {
  const b = await p()
  console.log(b);
}
myFunc()

const arrowFunc = () => ({a:1,b:2})

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  };
  getX() {
    return this.x;
  }
}
let cp = new Point(25, 8);
console.log(cp.getX());
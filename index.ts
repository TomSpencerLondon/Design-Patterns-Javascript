class MyContainer {
  [Symbol.iterator](): Iterator<number> {
    let counter = 0;
    return {
      next() {
        return {
          done: counter > 5,
          value: counter++
        };
      }
    }
  }
}

const myObject = new MyContainer();

for (let element of myObject){
  console.log(element);
}

let iterator = myObject[Symbol.iterator]();
let iteratorResult = iterator.next();
console.log(iteratorResult.done);

while (!iteratorResult.done){
  console.log(iteratorResult.value);
  iteratorResult = iterator.next();
}

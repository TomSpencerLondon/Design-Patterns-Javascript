class MyGenerator {
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

// const myObject = new MyContainer();
//
// for (let element of myObject){
//   console.log(element);
// }
//
// let iterator = myObject[Symbol.iterator]();
// let iteratorResult = iterator.next();
// console.log(iteratorResult.done);
//
// while (!iteratorResult.done){
//   console.log(iteratorResult.value);
//   iteratorResult = iterator.next();
// }

const g = new MyGenerator;

const arr = [1, 2, 3, 4];
for (const el of arr){
  console.log(el);
}

const iterator = arr[Symbol.iterator]();
console.log(iterator);

let iteratorResult = iterator.next();
console.log(iteratorResult);

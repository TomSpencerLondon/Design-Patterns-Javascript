#!/usr/bin/env node

class MyContainer {
  [Symbol.iterator]() {
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
let value = iterator.next();
console.log(value.done);

while (!value.done){
  console.log(value.value);
  value = iterator.next();
}

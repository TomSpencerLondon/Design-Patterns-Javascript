// interface Bill {
//   total: () => number;
// }
//
// abstract class Base implements Bill {
//   abstract total(): number;
//
//   printTotal(): void {
//     console.log(this.total());
//   }
// }
//
// abstract class Base2 {
//   abstract f(): string;
// }
//
// class Derived extends Base, Base2 {
//   constructor(BaseStrategy, Base2Strategy) {}
//   total(): number {
//     return 0;
//   }
//
//   f(){
//
//   }
// }
//
// const d = new Derived();
//
// d.printTotal();


// strategy pattern solves some problems:
// abstract classes - 2 base classes
// want new derived class to implement both abstract classes
// Wanted to have functions with implementation inside our classes
// extend base inside classes - can lead to the diamond problem
// derived class extends 2 base classes
// diamond problem - same definition 2 ways

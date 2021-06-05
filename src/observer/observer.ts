// Observer Pattern

// observer pattern - object change the direction of communication

// not function calls a function - object observed - subscribe observer
// event calls the observers
// Web API send request to a server - synchronous code
// Takes a long time - web api is bottle neck
// wait for API to respond - do what you want to do
// More complex for beginners - asynchronous responses

// User front end websites - input field - key input
// Javascript - Promise later version - like an observer
// Promise is a bit restricted - trigger once - cant filter
// Rx JS
// https://rxjs.dev/guide/observable
// Observable and observer

interface Observer {
  next(counter: number): void;
  error(): void;
  complete(): void;
}


interface Observable {
  subscribe(observer: Observer): void
}

class ConcreteObservable {
  subscribe(observer: Observer): void {
    let counter = 0;

    const interval = setInterval(() => {
      observer.next(counter);
      ++counter;
      if (counter === 5) {
        clearInterval(interval);
        observer.complete();
      }
    }, 400);

  }
}

class ConcreteObserver {
  constructor(
    public next: (counter: number) => void,
    public error: () => void,
    public complete: () => void
  ) {}
}

const observable = new ConcreteObservable();
const observer = new ConcreteObserver(
  (counter: number) => {
    console.log('Next');
  },() => {
    console.log('Error');
  },() => {
    console.log('Complete');
  },
);


observable.subscribe(observer);

observable.subscribe(new ConcreteObserver(
  (counter: number) => {
    console.log("Observer 2, Next: " + counter);
  },
  () => {
    console.log("Error2");
  },
  () => {
    console.log("Complete2");
  },
));









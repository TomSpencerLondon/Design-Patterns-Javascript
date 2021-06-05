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
  next(): void;
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
      observer.next();
      ++counter;
      if (counter === 5) {
        clearInterval(interval);
        observer.complete();
      }
    }, 400);

  }
}

class ConcreteObserver {
  next(): void {
    console.log("Next");
  }

  error(): void {
    console.log("Error");
  }

  complete(): void {
    console.log("Complete");
  }
}

const observable = new ConcreteObservable();
const observer = new ConcreteObserver();

observable.subscribe(observer);









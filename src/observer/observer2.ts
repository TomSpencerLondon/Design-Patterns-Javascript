import { Observable, Observer } from 'rxjs';

const observable = new Observable<number>( subscriber => {
  let counter = 0;

  const interval = setInterval(() => {
    observer.next(counter);
    ++counter;
    if (counter === 5) {
      clearInterval(interval);
      observer.complete();
    }
  }, 400);
})

const observer: Observer<number> = {
  next(counter: number) {
    console.log('Next');
  },
  error() {
    console.log('Error');
  },
  complete() {
    console.log('Complete');
  }
}

observable.subscribe(observer);


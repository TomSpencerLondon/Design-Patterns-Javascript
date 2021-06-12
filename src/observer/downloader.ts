import https from 'http';
import { Observable, Observer } from 'rxjs';

const observable = new Observable<string>(subscriber => {
  const options = {
    hostname: 'www.google.com',
    method: 'GET'
  }

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      subscriber.next(data);
      subscriber.complete();
    });
  });

  req.on('error', (error) => {
    subscriber.error(error);
  });

  req.end();

});

const observer: Observer<string> = {
  next(data: string) {
    console.log(data);
  },
  error(err: string) {
    console.log(err);
  },
  complete() {
    console.log('Complete');
  }
}

observable.subscribe(observer);

import https from 'http';

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
    console.log(data);
  });
});

req.end();

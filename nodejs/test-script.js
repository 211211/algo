const request = require('request');

const messages = [
  { topic: 'test', message: 'this is message 1' },
  { topic: 'test', message: 'this is message 2' },
  { topic: 'test', message: 'this is message 3' },
];

messages.forEach(async (message) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/messages',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(`Response from server: ${response.statusCode} ${response.statusMessage}`);
    console.log(`Response body: ${body}`);
  });
});

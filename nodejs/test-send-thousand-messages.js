const request = require('request');

const sleep = (ms) => {
  return new Promise((resolve) => {
      setTimeout(() => resolve(), ms)
  })
}

const sendMessage = async (topic, message) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:3000/messages',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic, message }),
  };

  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
};

const sendMessages = async (numMessages) => {
  const promises = [];
  for (let i = 0; i < numMessages; i += 1) {
    promises.push(sendMessage('test', `this is message ${i}`));
    if ((i + 1) % 50 === 0 || i === numMessages - 1) {
      await Promise.all(promises);
      await sleep(200)
      console.log(`Sent ${i + 1} messages`);
      promises.length = 0;
    }
  }
};

sendMessages(20000);


// const request = require('request');
// const async = require('async');

// const sendMessage = (topic, message, callback) => {
//   const options = {
//     method: 'POST',
//     url: 'http://localhost:3000/messages',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ topic, message }),
//   };

//   request(options, (error, response, body) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, response);
//     }
//   });
// };

// const sendMessages = (numMessages) => {
//   const messageQueue = async.queue(sendMessage, 10);
//   for (let i = 0; i < numMessages; i += 1) {
//     messageQueue.push(['test', `this is message ${i}`]);
//   }
//   messageQueue.drain = () => {
//     console.log(`Sent ${numMessages} messages`);
//   };
// };

// sendMessages(20000);

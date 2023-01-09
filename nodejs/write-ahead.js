const express = require('express');
const fs = require('fs');
const uuid = require('uuid');

const app = express();
app.use(express.json());

// Set up the API endpoint to receive messages
app.post('/messages', (req, res) => {
    // Generate a unique ID for the message
    const messageId = uuid.v4();
    // Write the message to the write-ahead log
    fs.appendFileSync('write-ahead-log.txt', `${messageId},${req.body.topic},${req.body.message}\n`);

    // Push the message to the appropriate queue
    pushToQueue(messageId, req.body.topic, req.body.message);

    // Return a response to the client
    res.send({ message: 'Message received', messageId, status: 'idle' });
});

// Set up the queue and workers
const queue = new Map();

function pushToQueue(messageId, topic, message) {
    if (!queue.has(topic)) {
        queue.set(topic, []);
    }
    queue.get(topic).push({ messageId, message, status: 'idle' });
    processQueue();
}

function processQueue() {
    try {
        // Check if there are any available workers
        if (availableWorkers.length === 0) {
            return;
        }

        // Get the next message from the queue
        const topic = getNextTopic();
        if (topic) {
            const message = queue.get(topic).shift();

            // Assign the message to a worker
            const worker = availableWorkers.shift();
            worker.process(message);
        } else {
            console.info('We have processed all messages in queue.')
        }
    } catch (error) {
        console.error(error)
    }
}

function getNextTopic() {
    // Get the topic with the most messages in the queue
    let maxTopic = null;
    let maxLength = 0;
    for (const [topic, messages] of queue) {
        if (messages.length > maxLength) {
            maxTopic = topic;
            maxLength = messages.length;
        }
    }
    return maxTopic;
}

const availableWorkers = [];

class Worker {
    constructor(id) {
        this.id = id;
    }

    process(message) {
        console.log(`Worker ${this.id} processing message: ${message.message}`);

        // Simulate processing the message
        setTimeout(() => {
            console.log(`Worker ${this.id} finished processing message`);
            availableWorkers.push(this);
            processQueue();
        }, 0);
    }
}

// Create 5 workers
for (let i = 1; i <= 10; i++) {
    availableWorkers.push(new Worker(i));
}

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});


process.on("SIGINT", () => {
    console.log("Received SIGINT. Killing all node processes...");
    process.exit();
});

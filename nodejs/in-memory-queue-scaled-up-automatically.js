const cluster = require('cluster');
const os = require('os');
const fs = require('fs');

// Set up the in-memory queue
const queue = [];

if (cluster.isMaster) {
    // Start up the specified number of worker processes
    const numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Monitor the queue size and resource usage
    setInterval(() => {
        // Scale up the number of worker processes if the queue size exceeds a certain threshold
        // or if the CPU usage of the master process exceeds a certain threshold
        const queueSize = queue.length;
        const cpuUsage = process.cpuUsage().system / 1000000;
        if (queueSize > 1000 || cpuUsage > 50) {
            cluster.fork();
        }
    }, 10000); // Check the queue and resource usage every 10 seconds
} else {
    // Process messages from the queue
    setInterval(() => {
        if (queue.length > 0) {
            const message = queue.shift();
            doWork(message);
        }
    }, 100); // Process a message every 100 milliseconds
}

// Add a message to the queue
const addMessage = (message) => {
    const newMessage = {
        id: Date.now(), // Generate a unique ID for the message
        status: 'pending', // Set the initial status to "pending"
        data: message
    };
    queue.push(newMessage);
    fs.appendFile('messages.txt', JSON.stringify(newMessage) + '\n', (err) => {
        if (err) {
            console.error(err);
        }
    });
    return newMessage.id;
};

// Process a message
const doWork = (message) => {
    // Set the status of the message to "processing"
    message.status = 'processing';

    // Do something with the message
    // ...

    // Set the status of the message to "done" when processing is complete
    message.status = 'done';
};

// Get the status of a message by ID
const getMessageStatus = (id) => {
    const message = queue.find((message) => message.id === id);
    if (message) {
        return message.status;
    }
    return null;
};

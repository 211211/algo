const express = require("express");
const fs = require("fs");
const os = require("os");
const cluster = require("cluster");
const http = require("http");

const app = express();

const queue = [];
const log = fs.createWriteStream("messages.txt", { flags: "a" });
const processedLog = fs.createWriteStream("processed-messages.txt", {
    flags: "a",
});

// Set up a route to add a message to the queue
app.post("/messages", (req, res) => {
    // Read the message from the request body
    let message = "";
    req.on("data", (chunk) => {
        message += chunk;
    });
    req.on("end", () => {
        try {
            // Parse the message and add it to the queue
            message = JSON.parse(message);
            const newMessage = {
                id: Date.now(), // Generate a unique ID for the message
                status: "pending", // Set the initial status to "pending"
                data: message,
                createdAt: new Date(),
            };
            console.log({ newMessage });
            queue.push(newMessage);

            // Write the message to the write-ahead log
            log.write(JSON.stringify(newMessage) + "\n", (error) => {
                if (error) {
                    console.error(error);
                    res.sendStatus(500);
                } else {
                    res.json({ id: newMessage.id });
                }
            });
        } catch (error) {
            console.error(error);
            res.sendStatus(400);
        }
    });
});

// Set up a route to get the status of a message by ID
app.get("/messages/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const message = queue.find((message) => message.id === id);
    if (message) {
        res.json(message);
    } else {
        res.sendStatus(404);
    }
});

// Set up a route to get the status of a message by ID
app.get("/messages/:id/status", (req, res) => {
    const id = parseInt(req.params.id);
    const message = queue.find((message) => message.id === id);
    if (message) {
        res.send(message.status);
    } else {
        res.sendStatus(404);
    }
});

if (cluster.isMaster) {
    // Start up the specified number of worker processes
    const numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    // Process messages from the queue
    setInterval(() => {
        if (queue.length > 0) {
            const message = queue.shift();
            message.startedAt = new Date();
            doWork(message)
                .then((result) => {
                    message.status = "success";
                    message.result = result;
                    message.finishedAt = new Date();
                    processedLog.write(JSON.stringify(message) + "\n", (error) => {
                        if (error) {
                            console.error(error);
                        }
                    });
                })
                .catch((error) => {
                    message.status = "error";
                    message.error = error;
                    message.finishedAt = new Date();
                    processedLog.write(JSON.stringify(message) + "\n", (error) => {
                        if (error) {
                            console.error(error);
                        }
                    });
                });
        }
    }, 100); // Process a message every 100 milliseconds

    // Create an HTTP server
    const server = http.createServer((req, res) => {
        res.writeHead(200);
        res.end("Hello from worker " + cluster.worker.id);
    });

    // Listen on port 3000
    server.listen(3000);
    console.log(`Worker process listening on port 3000`);
}

function doWork(message) {
    return new Promise((resolve, reject) => {
        console.log(`processing message: ${message}`);
        resolve(message);
        // Do some work with the message and resolve or reject the promise
        // based on the result of the work
    });
}

process.on("SIGINT", () => {
    console.log("Received SIGINT. Killing all node processes...");
    process.exit();
});

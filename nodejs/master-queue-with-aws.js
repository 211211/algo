const express = require('express');
const AWS = require('aws-sdk');

// Set up the express app
const app = express();

// Set up the AWS SDK
AWS.config.update({ region: 'us-east-1' });
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

// Set up the master queue URL
const masterQueueUrl = 'https://sqs.us-east-1.amazonaws.com/123456789012/MasterQueue';

// Set up a route to receive requests from users
app.post('/requests', (req, res) => {
    // Extract the topic and message from the request
    const { topic, message } = req.body;

    // Send the message to the appropriate queue based on the topic
    const queueUrl = getQueueUrlForTopic(topic);
    const params = {
        QueueUrl: queueUrl,
        MessageBody: JSON.stringify(message)
    };
    sqs.sendMessage(params, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Failed to send message' });
        } else {
            res.send({ message: 'Message sent' });
        }
    });
});

// Set up a route to receive messages from the master queue
app.post('/master-queue', (req, res) => {
    // Extract the topic and message from the request
    const { topic, message } = req.body;

    // Send the message to the appropriate queue based on the topic
    const queueUrl = getQueueUrlForTopic(topic);
    const params = {
        QueueUrl: queueUrl,
        MessageBody: JSON.stringify(message)
    };
    sqs.sendMessage(params, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Failed to send message' });
        } else {
            res.send({ message: 'Message sent' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// Helper function to get the queue URL for a given topic
const getQueueUrlForTopic = (topic) => {
    switch (topic) {
        case 'bookings':
            return 'https://sqs.us-east-1.amazonaws.com/123456789012/BookingsQueue';
        case 'reviews':
            return 'https://sqs.us-east-1.amazonaws.com/123456789012/ReviewsQueue';
        default:
            return 'https://sqs.us-east-1.amazonaws.com/123456789012/OtherQueue';
    }
};

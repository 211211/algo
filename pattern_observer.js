function Publisher() {
    // a list of publishers
    this.publishers = []

    this.subscribe = (subscriber) => {
        this.publishers.push(subscriber)
    }

    this.unsubscribe = (unsubscriber) => {
        this.publishers = this.publishers.filter((subscriber) => {
            return subscriber !== unsubscriber
        })
    }

    this.publish = () => {
        this.publishers.forEach((subscriber) => subscriber.call())
    }
}

const subscriber1 = () => {
    console.log('1')
}

const subscriber2 = () => {
    console.log('2')
}

const publisher = new Publisher()
publisher.subscribe(subscriber1)
publisher.subscribe(subscriber2)

publisher.publish()

publisher.unsubscribe(subscriber2)

publisher.publish()

class ChatRoom {
    constructor() {
        this.publisher = new Publisher()
        this.publisher.subscribe(subscriber1)
    }

    emitMessage(message) {
        console.log(message)
    }

    sendMessage() {
        this.publisher.publish()
    }
}
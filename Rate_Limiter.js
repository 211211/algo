/**
 * @param {number} n
 * @param {number} t
 */
var RateLimiter = function (n, t) {
    this.limit = n;
    this.timeWindow = t
    this.queue = []
};

/** 
 * @param {number} timestamp
 * @return {boolean}
 */
RateLimiter.prototype.shouldAllow = function (timestamp) {
    console.log('processing timestamp: ', timestamp)
    let result = false
    const diff = timestamp - this.timeWindow

    while (this.queue.length && this.queue[this.queue.length - 1] <= diff) {
        console.log('before this.queue: ', this.queue)

        this.queue.pop()
    }

    console.log('this.queue: ', this.queue)
    if (this.queue.length < this.limit) {
        this.queue.unshift(timestamp)
        result = true
        console.log({ result })
        return result
    }

    console.log({ result })
    return result
};

/** 
 * Your RateLimiter object will be instantiated and called as such:
 * var obj = new RateLimiter(n, t)
 * var param_1 = obj.shouldAllow(timestamp)
 */

const rateLimiter = new RateLimiter(3, 5);
rateLimiter.shouldAllow(1); // returns True
// There are no previous requests, so this request is allowed.
rateLimiter.shouldAllow(1); // returns True
// We can allow 3 requests every 5 seconds, so this request is allowed.
// Timestamps of allowed requests are [1,1].
rateLimiter.shouldAllow(2); // returns True
// Timestamps of allowed requests are [1,1,2].
rateLimiter.shouldAllow(3); // returns False
// This request is not allowed because
// the time range [1,3] already has 3 allowed requests.
rateLimiter.shouldAllow(8); // returns True
                             // This request is allowed because
                             // the time range [4,8] does not have any allowed requests.
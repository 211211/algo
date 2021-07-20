var candy = function(ratings) {
    const candies = []
    for (let i = 0; i<ratings.length;i++) {
        candies[i] = 1
    }

    for (let i = 0; i<ratings.length;i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = Math.max(candies[i-1] + 1, candies[i])
        }
    }

    for (let i = ratings.length - 1; i >= 0;i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i+1] + 1, candies[i])
        }
    }

    return candies.reduce((a,b) => a + b)
};
console.log(candy([1,3,4,5,2]))

const fib = (n) => {
    const hashMap = {};
    hashMap[0] = 0;
    hashMap[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        hashMap[i] = hashMap[i - 1] + hashMap[i - 2];
    }

    return hashMap[n];
};
console.log(fib(8)); // 21


// memo way
const fib = (n, memo = null) => {
    memo = memo || {};
    if (memo[n]) {
        return memo[n];
    }

    if (n <= 1) {
        return n;
    }

    return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};
console.log(fib(8)); // 21

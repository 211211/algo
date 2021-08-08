const p = new Promise((resolve) => {
    resolve(1);
});

async function asyncReturn() {
    return p;
}

function basicReturn() {
    return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false

async function foo() {
    const result1 = await new Promise((resolve) =>
        setTimeout(() => resolve("1"))
    );
    const result2 = await new Promise((resolve) =>
        setTimeout(() => resolve("2"))
    );
}
foo();

async function foo() {
    const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
    const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
    const results = [await p1, await p2] // Do not do this! Use Promise.all or Promise.allSettled instead.
 }
 foo().catch(() => {}) // Attempt to swallow all errors...
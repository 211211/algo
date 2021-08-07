function add(a, b) {
    return a + b;
}

Array.prototype.myReduce = function(func, init) {
    let accommulator = init
    for (let i = 0; i < this.length; i++) {
        accommulator = func(accommulator, this[i])
    }

    return accommulator
}

console.log([1, 2, 3].myReduce(add, 0));

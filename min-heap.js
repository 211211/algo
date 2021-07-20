class MinHeap {
    constructor(input = []) {
        this.data = new Map(input.map((value, i) => [i, value]))
        this.buildHeap(this.data.size)
    }

    top() {
        return this.data.get(0)
    }

    getData() {
        return this.data
    }

    swap(i, j) {
        let temp = this.data.get(i)
        this.data.set(i, this.data.get(j))
        this.data.set(j, temp)
    }

    buildHeap(n) {
        for (let i = (n / 2) - 1; i >= 0; i--) {
            this.minHeapify(i)
        }
    }

    push(value) {
        this.data.set(this.data.size, value) // push back
        // i is last index
        let i = this.data.size - 1
        let parentIndex = parseInt((i - 1) / 2, 10)

        while (i !== 0 && this.data.get(parentIndex) > this.data.get(i)) {
            this.swap(i, parentIndex)
            i = parentIndex
            parentIndex = parseInt((i - 1) / 2, 10)
        }
    }

    // remove top

    size() {
        return this.data.size
    }

    isEmpty() {
        return this.data.size === 0
    }

    pop() {
        const length = this.size()
        if(length === 0) {
            return
        }

        this.data.set(0, this.data.get(length - 1))
        this.data.delete(length - 1)

        // cân bằng lại từ phần tử đầu tiên
        this.minHeapify(0)
    }

    findLeftChildIndex(i) {
        return (i * 2) + 1
    }

    findRightChildIndex(i) {
        return (i * 2) + 2
    }

    clear() {
        this.data = new Map()
    }

    minHeapify(i) {
        let smallest = i
        let left = this.findLeftChildIndex(i)
        let right = this.findRightChildIndex(i)

        if (left < this.data.size && this.data.get(left) < this.data.get(smallest)) {
            smallest = left
        }

        if (right < this.data.size && this.data.get(right) < this.data.get(smallest)) {
            smallest = right
        }

        if (smallest !== i) {
            this.swap(i, smallest)
            this.minHeapify(smallest)
        }
    }
}

const myMinHeap = new MinHeap([7, 12, 6, 10, 17, 15, 2, 4])
console.log('min is: ', myMinHeap.top())
myMinHeap.push(3)
console.log(myMinHeap.getData())
myMinHeap.pop()
myMinHeap.clear()
console.log(myMinHeap.getData())

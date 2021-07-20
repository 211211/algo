class MaxHeap {
    constructor(input = []) {
        this.data = new Map(input.map((value, i) => [i, value]))
        this.buildHeap(this.data.size)
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
            this.maxHeapify(i)
        }
    }

    maxHeapify(i) {
        let largest = i
        let left = i * 2 + 1
        let right = i * 2 + 2

        if (left < this.data.size && this.data.get(left) > this.data.get(largest)) {
            largest = left
        }
    
        if (right < this.data.size && this.data.get(right) > this.data.get(largest)) {
            largest = right
        }
    
        if (largest !== i) {
            this.swap(i, largest)
            this.maxHeapify(largest)
        }
    }
}

const myMaxHeap = new MaxHeap([7, 12, 6, 10, 17, 15, 2, 4])
console.log(myMaxHeap.getData())
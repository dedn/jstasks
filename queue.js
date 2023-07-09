class Queue {
    #storage = {}
    #last = 0
    #first = 0

    enqueue(item) {

        this.#storage[this.#last] = item
        this.#last++
        console.log('#storage', this.#storage)
    }

    dequeue() {
        console.log('this', this)
        if (this.size === 0) {
            throw new Error('error')
            return
        }
        const value = this.#storage[this.#first]
        delete this.#storage[this.#first]
        this.#first++
        return value
    }


    get size() {
        console.log('this', this)
        return this.#last - this.#first
    }
}

const  table = new Queue()


table.enqueue(1)
table.enqueue(2)
table.enqueue(42)

table.dequeue()

table.size


console.log(table.size)
class DoubleLinkedList {
    #len = 0
    #head = null
    #tail = null

    /**
     * insert into end of the list
     * @param val
     */
    append(val) {
        let node = new DoubleLinkedNode(val, this.#tail, null)
        if (this.#tail) { //!= null
            this.#tail.next = node
        } else {
            this.#head = node
        }
        this.#tail = node
        this.#len++
    }

    /**
     * insert into begin of the list
     * @param val
     */
    prepend(val) {
        let node = new DoubleLinkedNode(val, null, this.#head)
        if (this.#head) {
            this.#head.prev = node
        } else {
            this.#tail = node
        }
        this.#head = node
        this.#len++
    }


    /**
     * insert by index
     * @param idx
     * @param val
     */
    insert(idx, val) {
        if (idx < 0 || idx > this.#len) {
            throw new RangeError("Index " + idx + "does not exist");
        }


        if (idx === 0) {
            this.prepend(val)
        } else if (idx === this.#len) {
            this.append(val)
        } else {
            let currentNode = this.#head
            let prevNode;
            for (let i = 0; i < idx; i++) {
                prevNode = currentNode
                currentNode = currentNode.next
            }

            let node = new DoubleLinkedNode(val, prevNode, currentNode)
            prevNode.next = node
            currentNode.prev = node
            this.#len++
        }
    }

    /**
     * Delete node by index
     * @param idx
     */
    delete(idx) {
        if (idx < 0 || idx > this.#len) {
            throw new RangeError("Index " + idx + "does not exist");
        }

        if (idx === 0) {
            this.#head = this.#head.next
            if(this.#head) {
                this.#head.prev = null
            } else {
                this.#tail = null
            }
        } else {
            let currentNode = this.#head
            let prevNode = null
            for (let i = 0; i < idx; i++) {
                prevNode = currentNode
                currentNode = currentNode.next
            }

            prevNode.next = currentNode.next
            if (prevNode.next) {
                prevNode.next.prev = prevNode
            } else {
                this.#tail = prevNode
            }
        }
        this.#len--
    }

    /**
     * Set new val to node by index
     * @param idx
     * @param val
     */
    set(idx, val) {
        if (idx < 0 || idx > this.#len) {
            throw new RangeError("Index " + idx + "does not exist");
        }

        let currentNode = this.#head
        for (let i = 0; i < idx; i++) {
            currentNode = currentNode.next
        }

        currentNode.val = val
    }

    findIdx(val) {
        let currentNode = this.#head
        for (let i = 0; i < this.#len; i++) {
            if (currentNode.val === val) {
                return i
            }
            currentNode = currentNode.next
        }
        return -1
    }

    get(idx) {
        if (idx < 0 || idx > this.#len) {
            throw new RangeError("Index " + idx + "does not exist");
        }

        let currentNode
        currentNode = this.#head
        for (let i = 0; i < idx; i++) {
            currentNode = currentNode.next
        }

        return currentNode.val
    }

    get len() {
        return this.#len;
    }

    get head() {
        return this.#head;
    }

    get tail() {
        return this.#tail;
    }

    print() {
        for (let i = 0; i < this.#len; i++) {
            console.log(this.get(i))
        }
    }
}

class DoubleLinkedNode {

    constructor(val, prev, next) {
        this.val = val
        this.prev = prev
        this.next = next
    }
}

export {DoubleLinkedList}

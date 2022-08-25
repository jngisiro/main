import { v5 } from 'uuid';

export class Node {
    constructor(private prevNode: string, private nextNode: string, private transactionId: string) {
        this.prevNode = prevNode;
        this.nextNode = nextNode;
        this.transactionId = transactionId;
    }

    get prev() {
        return this.prevNode;
    }

    get id() {
        return this.transactionId;
    }

    get next() {    
        return this.nextNode;
    }
}
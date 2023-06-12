export default class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

let node1 = new Node(2);
let node2 = new Node(4);
node1.next = node2;
console.log(node1);
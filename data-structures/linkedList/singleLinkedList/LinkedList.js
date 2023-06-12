import Node from './Node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    let newNode = new Node(data);
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.size++;
  }

  // Insert at index
  insertAtIndex(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    // if first index
    if (index === 0) {
      this.insertFirst(data);
    }

    const newNode = new Node(data);
    let current, previous;

    // Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    newNode.next = current;
    previous.next = newNode;

    this.size++;
  }

  // Get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data)
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;
    const values = [];

    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}
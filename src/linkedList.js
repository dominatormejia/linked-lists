export const greeting = "Hello, Odinite!";

class Node {
  constructor(data = null, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  append(data) {
    let node = new Node(data);
    let current;

    if (this.head === null) {
      this.prepend(data);
      return;
    } else {
      current = this.head;
    }

    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = node;
    this.size++;
  }
  getSize() {
    return this.size;
  }
  getHead() {
    if (!this.head) return null;
    let current = this.head;
    return current;
  }
  getTail() {
    if (!this.head) return null;

    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    if (!this.head) return;

    if (!this.head.nextNode) {
      this.head = null;
      this.size--;
      return;
    }

    let current = this.head;
    let previous;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
    this.size--;
  }
  contains(data) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (data === current.data) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(data) {
    if (!this.head) return;

    let current = this.head;
    let count = 0;

    while (current) {
      if (data === current.data) {
        return count;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }

  toString() {
    if (!this.head) return "Empty list";

    let current = this.head;
    let string = ``;

    while (current) {
      string += `(${current.data}) -> `;
      current = current.nextNode;
    }
    string += `null`;
    return string;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) return null;

    if (!this.head || index === 0) {
      this.prepend(data);
      return;
    }

    let node = new Node(data);
    let current = this.head;
    let count = 0;
    let previous;

    while (count < index) {
      previous = current;
      count++;
      current = current.nextNode;
    }

    node.nextNode = current;
    previous.nextNode = node;
    this.size++;
  }
  removeAt(index) {
    if (index < 0 || index > this.size) return null;

    if (index === this.size) {
      this.pop();
      return;
    }

    let current = this.head;
    let count = 0;
    let previous;
    if (index === 0) {
      this.head = current.nextNode;
      this.size--;
      return;
    } else {
      while (count < index) {
        previous = current;
        count++;
        current = current.nextNode;
      }
    }
    previous.nextNode = current.nextNode;
    this.size--;
  }
  clear() {
    this.head = null;
    this.size = 0;
  }
}

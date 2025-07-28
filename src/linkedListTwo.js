export const greeting = "Hello, Odinite!";

class Node {
  constructor(data = null, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    if (!this.head) {
      this.prepend(data);
      return;
    }

    let node = new Node(data);
    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = node;
    this.size++;
  }

  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  tail() {
    if (!this.head) return null;
    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (index < 0 || index > this.size) return;

    let current = this.head;
    let counter = 0;

    while (counter < index) {
      current = current.nextNode;
      counter++;
    }
    return current;
  }

  pop() {
    if (!this.head) return;

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
    if (!this.head) return false;

    let current = this.head;

    while (current) {
      if (current.data === data) return true;
      current = current.nextNode;
    }

    return false;
  }
  find(data) {
    if (!this.head) return null;

    let current = this.head;
    let counter = 0;

    while (current) {
      if (current.data === data) return counter;
      current = current.nextNode;
      counter++;
    }
  }

  toString() {
    if (!this.head) return `Linked List is empty`;
    let str = ``;

    let current = this.head;

    while (current) {
      str += `(${current.data}) -> `;
      current = current.nextNode;
    }

    str += `null`;
    return str;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) return null;

    if (!this.head || index === 0) {
      this.prepend(data);
      return;
    }

    let current = this.head;
    let counter = 0;
    let previous;
    let node = new Node(data);

    while (counter < index) {
      previous = current;
      current = current.nextNode;
      counter++;
    }
    node.nextNode = current;
    previous.nextNode = node;
    this.size++;
  }

  removeAt(index) {
    if (index < 0 || index > this.size || !this.head) return null;

    if (index === this.size) {
      this.pop();
      return;
    }

    let current = this.head;
    let counter = 0;
    let previous;

    if (index === 0) {
      this.head = current.nextNode;
      this.size--;
      return;
    }

    while (counter <= index) {
      previous = current;
      current = current.nextNode;
      counter++;
    }
    previous.nextNode = current.nextNode;
    this.size--;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}

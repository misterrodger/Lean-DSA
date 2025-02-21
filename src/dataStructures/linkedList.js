// WIP

class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.getHead()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++
  }

  print() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next
    }
    console.log(elements);
  }

  insert(value, position) {
    const newNode = new Node(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let previous;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++
      }

      previous.next = newNode;
      newNode.next = current;

      if (!newNode.next) {
        this.tail = newNode;
      }
    }
    this.size++
  }

  // TODO insert, delete, reverse
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.print();
list.insert(42, 2);
list.print()

class MyStack {
  constructor(storage) {
    this.storage = storage || [];
  }

  push(element) {
    this.storage.push(element);
  }

  pop() {
    return this.storage.pop();
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}

class MyQueue {
  constructor() {
    this.storage = new MyStack(); 
  }

  push(element) {
    this.storage.push(element);
  }

  pop() {
    const newQueue = new MyStack();
    const newerQueue  = new MyStack();
    while (!this.storage.isEmpty()) {
      newQueue.push(this.storage.pop())
    };
    const poppedValue = newQueue.pop();
    while (!this.storage.isEmpty()) {
      newerQueue.push(this.storage.pop());
    }
    this.storage = newerQueue;
    return poppedValue; 
  }

  isEmpty() {
    return this.storage.isEmpty();
  }

}
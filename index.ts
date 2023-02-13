class StackV1 {
  protected stack: any[];

  constructor() {
    this.stack = [];
  }

  push(item): void {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  get size() {
    return this.stack.length;
  }

  get peek() {
    return this.stack[this.size - 1];
  }
}

class StackV2 {
  protected stack: {};
  protected currentSize: number;

  constructor() {
    this.currentSize = 0;
    this.stack = {};
  }

  get size() {
    return this.currentSize;
  }

  push(item): void {
    this.currentSize++;
    this.stack[this.currentSize] = item;
  }

  pop() {
    const res = this.stack[this.size];
    delete this.stack[this.size];
    this.currentSize--;

    return res;
  }

  get peek() {
    return this.stack[this.size];
  }
}

/////

const v1 = new StackV1();

console.log('v1 size:', v1.size); // 0

v1.push('alfa');
v1.push('back');
v1.push('test');
v1.push('food');
v1.push('friend');

console.log('v1 size:', v1.size); // 5
console.log('v1 pop:', v1.pop()); // friend
console.log('v1 size:', v1.size); // 4
console.log('v1 peek:', v1.peek); // food

/////
console.log('-------');
/////

const v2 = new StackV1();

console.log('v2 size:', v2.size); // 0

v2.push(1);
v2.push(2);
v2.push(3);
v2.push(4);
v2.push(5);

console.log('v2 size:', v2.size); // 5
console.log('v2 pop:',  v2.pop()); // 5
console.log('v2 size:', v2.size); // 4
console.log('v2 peek:', v2.peek); // 4

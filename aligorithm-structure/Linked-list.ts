import { List } from './interface';

export class ArrayList<T> extends List<T> {
  // 初始容积，指定初始容器大小
  private capacity: number = 50;
  // 每次扩容倍数
  private multiple: number = 1.5;
  // 数据容器
  private container: (T|undefined)[];

  constructor(capacity: number = 50) {
    super();
    this.capacity = capacity;
    this.container = new Array(this.capacity);
  }

  /**
   * 扩容
  */
  private ensureCapacity(count: number = 0) {
    const capacity = Math.ceil((this.capacity + count) * this.multiple);
    const container = new Array(capacity);

    for (let i = 0; i < this.container.length; i++) {
      container[i] = this.container[i];
    }
    this.container = container;
  }

  /**
   * @override
  */
  push(...args: T[]) {
    if (this.length + args.length > this.container.length) this.ensureCapacity(this.length + args.length);

    for (let i = 0; i < args.length; i++) {
      this.container[this.length + i] = args[i];
    }
    this.length += args.length;
    return this.length;
  }

  /**
   * @override
  */
  pop() {
    if (this.length === 0) return;

    const element = this.container[this.length - 1];
    this.container[this.length - 1] = undefined;
    this.length -= 1;
    return element;
  }

  /**
   * @override
  */
  shift() {
    if (this.length === 0) return;

    const element = this.container[0];
    for (let i = 0; i < this.container.length; i++) {
      this.container[i] = this.container[i + 1];
    }
    this.length -= 1;
    return element;
  }

  unshift(...args: T[]) {
    const count = args.length;
    if (this.length + args.length > this.capacity) this.ensureCapacity(this.length + args.length);
    for (let i = this.container.length - 1; i >= 0; i--) {
      this.container[i + count] = this.container[i];
    }
    for (let i = 0; i < this.container.length; i++) {
      this.container[i] = args[i];
    }
    this.length += count;
    return this.length;
  }

  public splice(index: number, count: number, ...insert: T[]): T[] {
    const removeCount = Math.min(count, this.length);
    if (this.length + insert.length - removeCount > this.capacity) this.ensureCapacity(insert.length - removeCount);
    for (let i = 0; i < count; i++) {
      this.container[index + i] = undefined;
    }

    const diff = insert.length - count;
    if (diff < 0) {
      for (let i = index + count; i < this.length; i++) {
        this.container[i + diff] = this.container[i];
      }
    } else {
      for (let i = 0; i < diff; i++) {
        this.container[this.length + i] = this.container[this.length - i - 1];
      }
    }
  }

  /**
   * @override
  */
  clear() {
    this.container = new Array(this.capacity);
  }
}


class LinkedNode<T> {
  public data: T;

  public next: LinkedNode<T> | null;

  constructor(data: T, next?: LinkedNode<T>) {
    this.data = data;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList<T> {
  size: number;
  private head: LinkedNode<T>;
  private tail: LinkedNode<T>;

  find() {}

  insert() {}

  remove() {}
}






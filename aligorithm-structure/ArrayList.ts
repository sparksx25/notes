import { List } from './interface';

export class ArrayList<E> extends List<E> {
  // 初始容积，指定初始容器大小
  private capacity: number = 50;
  // 每次扩容倍数
  private multiple: number = 1.5;
  // 当前存储的元素个数
  private length: number = 0;
  // 数据容器
  private container: (E|undefined)[];

  constructor(capacity: number = 50) {
    super();
    this.capacity = capacity;
    this.container = new Array(this.capacity);
  }

  private ensureCapacity(count: number) {
    if (this.length + count < this.capacity) return;

    this.capacity = Math.ceil((this.length + count) * this.multiple);
    const container = new Array(this.capacity);

    for (let i = 0; i < this.container.length; i++)
    container[i] = this.container[i];
  
    this.container = container;
  }
  
  size(): number {
    return this.length;
  }

  get(index: number): E|undefined {
    return this.container[this.getIndex(index)];
  }
    
  splice(start: number, deleteCount: number, ...items: E[]): E[] {
    start = this.getIndex(start);
    deleteCount = Math.min(deleteCount, this.length - start);

    const removeItems = new Array(deleteCount);
    const diff = Math.abs(items.length - deleteCount);

    if (items.length > deleteCount) this.ensureCapacity(diff);

    for (let i = 0; i < deleteCount; i++)
    removeItems[i] = this.container[start + i];

    if (items.length < deleteCount) {
      for (let i = start + deleteCount; i < this.length; i++) 
      this.container[i - diff] = this.container[i];
      for (let i = 0; i < diff; i++)
      this.container[this.length - 1 - i] = undefined;
    } else {
      for (let i = this.length - 1; i >= start; i--)
      this.container[i + diff] = this.container[i];
    }

    for (let i = 0; i < items.length; i++)
    this.container[start + i] = items[i];

    this.length += items.length - deleteCount;
    return removeItems;
  }
}


const arr = new ArrayList<string>(1);
console.log(arr.add('a')); 
// 1,  ["a"]
console.log(arr.add('b')); 
// 2,  ["a", "b"]
console.log(arr.add('c', 2));
// 3, ["a", "b", "c"]
console.log(arr.remove(1));
// b, ["a", "c"]
console.log(arr.size());
// 2, ["a", "c"]
console.log(arr.push('d'));
// 3, ["a", "c", "d"]
console.log(arr.push('e', 'f'));
// 5, ["a", "c", "d", "e", "f"]
console.log(arr.pop());
// f, ["a", "c", "d", "e"]
console.log(arr.unshift('a'));
// 5, ["a", "a", "c", "d", "e"]
console.log(arr.shift()); 
// a, ["a", "c", "d", "e"]
console.log(arr.remove(-1));
// e, ["a", "c", "d"]
console.log(arr);
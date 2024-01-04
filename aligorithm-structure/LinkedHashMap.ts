import { HashMap, Pair } from './HashMap';
import { LinkedList } from './LinkedList'

import type { HashKey } from './HashMap';

/**
 * 使用链地址法实现 HashMap
*/
export class LinkedHashMap<K extends HashKey, V> extends HashMap<K, V> {
  // 数组容器
  private buckets: LinkedList<Pair<K, V>>[];
  // 键值对数量
  private length: number = 0;

  constructor(capacity?: number) {
    super(capacity);
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList())
  }

  /**
   *  扩容
  */
  protected ensureFactor() {
    if (this.length / this.capacity < this.factor) {
      return;
    }
    const pairs: [K, V][] = [];
    this.forEach((value, key) => {
      pairs.push([key, value]);
    });
    this.capacity = Math.ceil(this.capacity * this.multiple);
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
    this.length = 0;
    for (let i = 0; i < pairs.length; i++) {
      this.set(pairs[i][0], pairs[i][1]);
    }
  }

  /**
   * 根据 key 查找 pair
  */
  protected find(key: K): Pair<K, V> | undefined {
    const linkedList = this.buckets[this.index(key)];
    return linkedList.find((pair) => pair.key === key);
  }

  /**
   * @override
  */
  size(): number {
    return this.length;
  }

  /**
   * @override
  */
  set(key: K, value: V): this {
    const linkedList = this.buckets[this.index(key)]!;
    const pairIndex = linkedList.findIndex((pair) => pair.key === key);
    if (pairIndex < 0) {
      this.length += 1;
      linkedList.insert(new Pair(key, value));
    } else {
      linkedList.update(pairIndex, new Pair(key, value));
    }
    this.ensureFactor();
    return this;
  }

  
  /**
   * @override
  */
  get(key: K): V | undefined {
    const pair = this.find(key);
    return pair ? pair.value : undefined;
  }

  /**
   * @override
  */
  has(key: K): boolean {
    const pair = this.find(key);
    return pair ? true : false;
  }

  /**
   * @override
  */
  delete(key: K): boolean {
    const linkedList = this.buckets[this.index(key)]!;
    const pairIndex = linkedList.findIndex((pair) => pair.key === key);
    if (pairIndex < 0) return false;
    linkedList.remove(pairIndex);
    this.length -= 1;
    return true;
  }

  /**
   * @override
  */
  clear(): void {
    this.capacity = this.initialCapacity;
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList())
    this.length = 0;
  }

  /**
   * @override
  */
  forEach(callbackfn: (value: V, key: K, map: LinkedHashMap<K, V>) => void, thisArg?: any): void {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i].forEach((pair) => callbackfn.call(thisArg ? thisArg : this, pair.value, pair.key, this));
    }
  }
}
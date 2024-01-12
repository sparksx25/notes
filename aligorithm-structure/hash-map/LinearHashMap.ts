import { HashMap, Pair } from './HashMap';

import type { HashKey } from './HashMap';

/**
 * 使用线性探测实现 HashMap
*/
export class LinearHashMap<K extends HashKey, V,> extends HashMap<K, V> {
  // 数组容器
  private buckets: (Pair<K, V> | undefined)[];
  // 键值对数量
  private length: number = 0;
  // 删除标志
  private removed: Pair<K, V> = new Pair(undefined as unknown as K, undefined as unknown as V);

  constructor(capacity?: number) {
    super(capacity);
    this.buckets = new Array(this.capacity).fill(undefined);
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
    this.buckets = new Array(this.capacity).fill(undefined);
    this.length = 0;
    for (let i = 0; i < pairs.length; i++) {
      this.set(pairs[i][0], pairs[i][1]);
    }
  }

  /**
   * 判断当前桶是否可利用的
  */
  protected isAvailable(index: number):boolean {
    const pair = this.buckets[index];
    return (pair && pair !== this.removed) ? false : true;
  }

  /**
   * 从指定 key 开始迭代键值对，   
   * 若 cb 返回 false 则停止迭代  
  */
  protected forEachFromKey(key: K, cb: (pair: Pair<K, V> | undefined, index: number) => boolean): void {
    const index = this.index(key);
    // 线性探测，从 index 开始向后遍历
    for (let i = 0; i < this.capacity; i++) {
      // 计算桶索引，越过尾部返回头部
      const position = (index + i) % this.capacity;
      const pair = this.buckets[position];
      if (cb(pair, position) === false) return;
    }
  }


  /**
   * 根据 key 查找 pair
  */
  protected find(key: K): Pair<K, V> | undefined {
    let res: Pair<K, V> | undefined;

    this.forEachFromKey(key, (pair, index) => {
      if (this.isAvailable(index)) {
        return false;
      }
      if (pair!.key === key) {
        res = pair;
        return false;
      };
      return true;
    });
    return res;
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
    this.ensureFactor();
    this.forEachFromKey(key, (pair, index) => {
      if (this.isAvailable(index)) {
        this.buckets[index] = new Pair(key, value);
        this.length += 1;
        return false;
      }
      if (pair!.key === key) {
        pair!.value = value;
        return false;
      };
      return true;
    })
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
    let res = true;
    this.forEachFromKey(key, (pair, index) => {
      if (this.isAvailable(index)) {
        res = false;
        return false;
      }
      if (pair!.key === key) {
        this.buckets[index] = this.removed;
        this.length -= 1;
        return false;
      }
      return true
    });
    return res;
  }

  /**
   * @override
  */
  clear(): void {
    this.capacity = this.initialCapacity;
    this.buckets = new Array(this.capacity).fill(undefined);
    this.length = 0;
  }

  /**
   * @override
  */
  forEach(callbackfn: (value: V, key: K, map: LinearHashMap<K, V>) => void, thisArg?: any): void {
    for (let i = 0; i < this.buckets.length; i++) {
      const pair = this.buckets[i];
      if (pair && pair !== this.removed) {
        callbackfn.call(thisArg === undefined ? this : thisArg, pair.value, pair.key, this);
      }
    }
  }
}
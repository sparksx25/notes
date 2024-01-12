export type HashKey = string | number | { hashCode: () => number };

// 键值对
export class Pair<K, V> {
  constructor(public key: K, public value: V) {}
}

// 哈希表
export abstract class HashMap<K extends HashKey, V> {
  // 负载因子阈值, 值的范围为 (0, 1]
  protected factor: number = 0.75;
  // 扩容倍数, 值的范围为 (1, ]
  protected multiple: number = 1.5;
  // 当前容量, 值的范围为 [1, ]
  protected capacity: number;
  // 初始容量, 值的范围为 [1, ]
  protected initialCapacity: number;

  constructor(capacity: number = 50) {
    this.capacity = capacity;
    this.initialCapacity = capacity;
  }

  /**
   * key 不能是空字符串
  */
  protected hashString(key: string): number {
    const modulus = 1_000_000_007;
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key[i].charCodeAt(0)) % modulus;
    }
    return hash;
  }
  /**
   * 根据 key 计算 hash 值
  */
  protected hash(key: K): number {
    if (typeof key === 'number') return key;
    if (typeof key === 'string') return this.hashString(key);
    return key.hashCode();
  }
  /**
   * 获取 key 对应的索引
  */
  protected index(key: K): number {
    return this.hash(key) % this.capacity;
  }
  /**
   * @returns string
  */
  toString() {
    let strJoin = '';
    this.forEach((value, key) => {
      if (strJoin === '') strJoin = '[';
      strJoin = strJoin + '\n' + '\t' + String(key) + '  =>  ' + String(value);
    })
    if (strJoin) strJoin = strJoin + '\n]';
    return strJoin;
  }
  /**
   * 清空 哈希表
  */
  abstract clear(): void;
  /**
   * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.
   */
  abstract delete(key: K): boolean;
  /**
   * Executes a provided function once per each key/value pair in the Map, in insertion order.
   */
  abstract forEach(callbackfn: (value: V, key: K, map: HashMap<K, V>) => void, thisArg?: any): void;
  /**
   * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
   * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
   */
  abstract get(key: K): V | undefined;
  /**
   * @returns boolean indicating whether an element with the specified key exists or not.
   */
  abstract has(key: K): boolean;
  /**
   * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
   */
  abstract set(key: K, value: V): this;
  /**
   * @returns the number of elements in the Map.
   */
  abstract size(): number;
}
// 列表
export { List, ArrayList, ArrayLinked } from './List';

// 哈希表
export interface HashTable<K, V> {
  size(): number
  has(key: K): boolean
  get(key: K): V
  set(key: K, value: V): void
}


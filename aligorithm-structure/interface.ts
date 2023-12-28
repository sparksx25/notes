// export interface LinkedNode<T> {
//   data: T,
//   next: LinkedNode<T> | null,
// }

// export interface LinkedList<T> {
//   size: number,
//   head: LinkedNode<T>,
//   tail: LinkedNode<T>
//   add: (value: T) => void,
//   remove: (index:number) => void,
// }


/**
 * 列表：弥补了数组的缺点(长度固定)
*/
export abstract class List<T> {
  /**
   * 当前列表的长度
  */
  length: number;
  /**
   * 列表末尾添加元素，
   * 返回当前列表长度
  */
  public abstract push(...args: T[]): number
  /**
   * 列表首部添加元素，
   * 返回当前列表长度
  */
  public abstract unshift(...args: T[]): number
  /**
   * 列表末尾删除元素，
   * 返回删除的元素
  */
  public abstract pop(): T|undefined
  /**
   * 列表首部删除元素，
   * 返回删除的元素
  */
  public abstract shift(): T|undefined
  /**
   * 从列表中指定的索引处开始计数，删除 count 个元素（包含索引处指定的元素），
   * 删除之后同时在该索引处插入n个元素,
   * 返回删除的元素列表
  */
  public abstract splice(index: number, count: number, ...insert: T[]): T[]

  /**
   * 清空所有元素
  */
  public abstract clear(): void
}


/**
 * 哈希表
 */
export interface HashTable<K, V> {
  get: (key: K) => V
  set: (key: K, value: V) => void
}


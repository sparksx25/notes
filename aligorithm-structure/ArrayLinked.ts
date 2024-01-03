import { List } from './List';
import { LinkedList } from './LinkedList';

/**
 * 使用链表实现 List
*/
export class ArrayLinked<E> extends List<E> {
  private linkedList: LinkedList<E>;
  constructor() {
    super();
    this.linkedList = new LinkedList<E>();
  }

  /**
   * @override
  */
  size(): number {
    return this.linkedList.size();
  }

  /**
   * @override
  */
  get(index: number): E|undefined {
    return this.linkedList.get(this.getIndex(index));
  }

  /**
   * @override
  */
  forEach(cb: (e: E, index: number) => any): void {
    this.linkedList.forEach(cb);
  }

  /**
   * @override
  */
  splice(index: number, deleteCount: number, ...items: E[]): E[] {
    index = this.getIndex(index);
    const removeList = this.linkedList.remove(index, deleteCount);
    this.linkedList.add(index, ...items);
    return removeList;
  }

  /**
   * @override
   * 利用链表“头节点”，“尾节点”的特性可以实现 O(1)复杂度
  */
  push(e: E):number {
    return this.linkedList.insert(e);
  }
}


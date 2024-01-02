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

  size(): number {
    return this.linkedList.size();
  }

  get(index: number): E|undefined {
    return this.linkedList.get(index);
  }

  splice(index: number, deleteCount: number, ...items: E[]): E[] {
    const removeList = this.linkedList.remove(index, deleteCount);
    this.linkedList.add(index, ...items);
    return removeList;
  }
}


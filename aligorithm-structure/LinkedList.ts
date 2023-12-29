import { List } from './interface';


class LinkedNode<E> {
  public data: E;

  public next: LinkedNode<E> | null;

  constructor(data: E, next?: LinkedNode<E>) {
    this.data = data;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList<E> extends List<E>{
  private head: LinkedNode<E>;
  private tail: LinkedNode<E>;
  private length: number = 0;

  constructor() {
    super();
  }

  size(): number {
    
  }

  get(index: number): E|undefined {
    index = this.getIndex(index);
    let node = this.head;
    let i = 0;
    while(i === index || node) {
      i += 1;
      node = node.next;
    }
  }

  splice(index: number, deleteCount: number, ...items: E[]): E[] {
      
  }
}






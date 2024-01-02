class LinkedNode<E> {
  public data: E;

  public next: LinkedNode<E> | null;

  constructor(data: E, next?: LinkedNode<E> | null) {
    this.data = data;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 单链表
*/
export class LinkedList<E> {
  private head: LinkedNode<E> | null;
  private tail: LinkedNode<E> | null;
  private length: number = 0;

  constructor() {
    this.head = this.tail = null;
  }

  protected find(index: number): LinkedNode<E>|null {
    if (index < 0) return this.head;
    if (index >= this.length) return this.tail;

    let node = this.head;
    let i = 0;
    while (i !== index && node) {
      node = node.next;
      i += 1;
    }
    return node;
  }

  size(): number {
    return this.length;
  }

  get(index: number):E|undefined {
    const node = this.find(index);
    return node?.data;
  }

  add(start: number, ...args: E[]): number {
    if (args.length === 0) return this.length;

    const nodes: LinkedNode<E>[] = [];
    for (let i = 0; i < args.length; i += 2) {
      let nextNode: LinkedNode<E> | null = null;
      if (i + 1 < args.length) {
        nextNode = new LinkedNode(args[i + 1]);
        nodes[i + 1] = nextNode;
      }
      nodes[i] = new LinkedNode(args[i], nextNode);
    }
    let prevNode = this.find(start - 1);
    let endNode = prevNode && prevNode.next;

    if (prevNode) {
      prevNode.next = nodes[0];
    } else {
      this.head = nodes[0]
    }
    nodes[nodes.length - 1].next = endNode;
    if (this.tail === null) {
      this.tail = endNode;
    }
    
    this.length += args.length;
    return this.length;
  }

  insert(e: E): number;
  insert(e: E, index: number): number;
  insert(e: E, index?: number): number {
    if (typeof index === 'number') {
      return this.add(index, e);
    }
    const node = new LinkedNode(e);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this.length;
  }

  remove(start: number, deleteCount: number = 1): E[] {
    // 删除节点区间的前一个节点
    const prevNode = this.find(start - 1);
    //删除节点区间的后一个节点
    let startNode = prevNode && prevNode.next;
    let i = 0;
    const removeList: E[] = [];
    while (i < deleteCount) {
      if (startNode) removeList[i] = startNode.data;
      if (this.tail === startNode) this.tail = null;

      startNode = startNode && startNode.next;
      i++;
    }
    const nextNode = startNode;
    if (start === 0) {
      this.head = nextNode;
    }
    if (this.tail === null) {
      this.tail = nextNode;
    }
    this.length -= deleteCount;
    return removeList;
  }

  forEach(cb: (e:E, index: number) => any) {
    let node = this.head;
    let i = 0;
    while (node) {
      if (cb(node.data, i) === false) return;
      i += 1;
      node = node.next;
    }
  }

  findIndex(cb: (e:E, index: number) => boolean):number {
    let index = -1;
    this.forEach((data, i) => {
      if (cb(data, i)) {
        index = i;
        return false;
      }
    })
    return index;
  }
}






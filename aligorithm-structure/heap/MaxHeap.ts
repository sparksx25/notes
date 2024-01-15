import { ArrayList } from '../list/ArrayList';

/**
 * 使用列表实现大顶堆
 */
export class MaxHeap<E> {
  private list = new ArrayList<E>()

  private get(index: number):E | undefined {
    return this.list.get(index);
  }

  /**
   * 获取当前节点所对的父节点索引
   * @param i 
   * @returns 
   */
  private parent(i): number {
    return Math.floor((i - 1) / 2);
  }

  /**
   * 获取当前节点所对的左子节点索引
   * @param i 
   * @returns 
   */
  private left(i): number {
    return 2 * i + 1;
  }

  /**
   * 获取当前节点所对的右子节点索引
   * @param i 
   * @returns 
   */
  private right(i):number {
    return 2 * i + 2;
  }

  /**
   * 如何比较两个节点的大小
   * @param node 当前操作的节点
   * @param referenceNode  referenceNode 为父节点
   * @returns 
   */
  compare(node:E, referenceNode :E):number {
    return Number(node) - Number(referenceNode);
  }

  
  size() {
    return this.list.size();
  }

  /**
   * 获取堆顶部数据
   * @returns 
   */
  top(): E | undefined {
    return this.list.get(0);
  }


  /**
   * 从指定索引处开始自下而上进行堆化
   * @param index 
   * @returns 
   */
  siftUp(index: number) {
    const parentIndex = this.parent(index);
    if (parentIndex < 0) return;

    const parentData = this.get(parentIndex)!;
    const insertData = this.get(index)!;
    const res = this.compare(insertData, parentData);
    if (res > 0) {
      this.list.set(parentIndex, insertData);
      this.list.set(index, parentData);
    }
    this.siftUp(parentIndex);
  }

  /**
   * 从指定索引处开始自上而下进行堆化
   * @param index 
   * @returns 
   */
  siftDown(index: number) {
    const leftIndex = this.left(index);
    const rightIndex = this.right(index);
    const length = this.size();
    if (leftIndex >= length - 1) return;

    let max:E;
    const topData = this.get(index)!;
    const leftData = this.get(this.left(index))!;
    const rightData = this.get(this.right(index))!;

    let res = this.compare(topData, leftData);
    max = res < 0 ? leftData : topData;
    if (rightIndex <= length - 1) {
      res = this.compare(max, rightData);
      max = res < 0 ? rightData : max;
    }
    if (max === topData) { 
      return 
    } else if (max === leftData) {
      this.list.set(index, leftData);
      this.list.set(leftIndex, topData);
      this.siftDown(leftIndex);
    } else {
      this.list.set(index, rightData);
      this.list.set(rightIndex, topData);
      this.siftDown(rightIndex);
    }
  }

  /**
   * 元素入堆
   * @param data 
   */
  push(data: E): void {
    const index = this.list.push(data) - 1;
    this.siftUp(index);
  }

  /**
   * 堆顶元素出堆
   * @returns 返回出堆的堆顶元素
   */
  pop(): E|undefined {
    if (this.size() === 0) return;
    const top = this.get(0);
    const last = this.get(this.size() - 1)!;
    this.list.set(0, last);
    this.list.splice(-1, 1);
    this.siftDown(0);
    return top;
  }
}
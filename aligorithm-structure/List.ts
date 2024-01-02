/**
 * 列表：弥补了数组的缺点(长度固定)
*/
export abstract class List<E> {
  /**
   * 获取索引
  */
  protected getIndex(index: number):number {
    const length = this.size();
    if (index < -1 * length) return 0;
    if (index < 0) return length + index;
    if (index > length) return length - 1;
    return index;
  }

  /**
   * 当前列表的长度
  */
  abstract size(): number;

  /**
   * 若 index 大于列表最大索引，则返回 undefined    
   * 若 index 小于 0, 则表示数组末尾的索引，若小于列表长度的相反数，则返回 undefined    
   * 获取指定索引处的元素
  */
  abstract get(index: number): E|undefined

  
  /**
   * 若 index 大于列表最大索引，则表现为添加   
   * 若 index 小于 0, 则表示数组末尾的索引，若小于列表长度的相反数，则从列表首部开始删除    
   * 否则从列表中指定的索引处开始计数，删除 count 个元素（包含索引处指定的元素），    
   * 返回删除的元素列表
  */
  abstract splice(index: number, deleteCount: number, ...items: E[]): E[]

  /**
   * 添加元素，返回列表的长度
  */
  add(e: E): number
  /**
   * 若 index 大于列表最大索引，则在末尾添加    
   * 若 index 小于 0, 则表示数组末尾的索引，若小于列表长度的相反数，则表示在列表首部添加    
   * 否则在指定索引处添加元素，返回列表的长度
  */
  add(e: E, index: number): number
  add(e: E, index?: number): number {
    if (typeof index === 'number') {
      this.splice(index, 0, e);
    } else {
      this.splice(this.size(), 0, e);
    }
    return this.size();
  }

  /**
   * 若 index 大于列表最大索引，则返回 undefined    
   * 若 index 小于 0, 则表示数组末尾的索引，若小于列表长度的相反数，则返回 undefined    
   * 否则删除指定索引处的元素，返回删除的元素
  */
  remove(index: number): E|undefined {
    const removeItems = this.splice(index, 1);
    return removeItems[0];
  }

  /**
   * 列表末尾添加元素，   
   * 返回列表长度
  */
  push(...args: E[]): number {
    this.splice(this.size(), 0, ...args);
    return this.size();
  }

  /**
   * 列表首部添加元素，   
   * 返回列表长度
  */
  unshift(...args: E[]): number {
    this.splice(0, 0, ...args);
    return this.size();
  }

  /**
   * 列表末尾删除元素，  
   * 返回删除的元素
  */
  pop(): E|undefined {
    return this.splice(-1, 1)[0];
  }

  /**
   * 列表首部删除元素，  
   * 返回删除的元素
  */
  shift(): E|undefined {
    return this.splice(0, 1)[0];
  }
}

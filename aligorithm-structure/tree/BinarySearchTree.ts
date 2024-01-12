import { BinaryTreeNode, ldr } from './BinaryTree';

// type Direction = 'left' | 'right' | null;
// type Node<E> = BinaryTreeNode<E>["left"];
// type CompareFn<E> = (insertData:E, nodeData:E) => number;

export abstract class BinarySearchTree<E> {
  protected root?: BinaryTreeNode<E>;

  /**
   * 二叉树有效节点数
   */
  abstract size(): number;

  /**
   * 数据插入
   * @param data 
   * @returns 插入成功返回 true，元素已存在则返回 false
   */
  abstract insert(data: E): boolean;

  /**
   * 数据删除
   * @param data 
   * @returns 
   */
  abstract remove(data: E): boolean;

  /**
   * 决定节点插入左边还是右边
   * @param insertData 待插入数据
   * @param nodeData 节点数据
   * @returns 返回值小于0插入左边，大于0插入右边，等于0则表示相等
   */
  compare(insertData: E, nodeData:E): number {
    return Number(insertData) - Number(nodeData);
  }

  /**
   * 获取节点中的最大值
   */
  max():E|undefined {
    let node = this.root;
    while(node?.right) {
      node = node.right;
    }
    return node?.data;
  }

  /**
   * 获取节点中的最小值
   */
  min():E|undefined {
    let node = this.root;
    while(node?.left) {
      node = node.left;
    }
    return node?.data;
  }

  /**
   * 以中序遍历的顺序返回元素列表
   * @returns 
   */
  toList(): E[] {
    const list: E[] = [];
    if (this.root) {
      ldr<E>(this.root, (data) => {
        list.push(data);
      });
    }
    return list;
  }
}


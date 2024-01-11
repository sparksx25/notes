import { dlr, ldr, lrd } from './BinaryTree';
import { BinarySearchTree } from './BinarySearchTree'
import { binaryTree2Array, createCBT} from './CompleteBinaryTree'

const cbtTree = createCBT([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const list = binaryTree2Array(cbtTree!);
console.log(list);


// 二叉搜索树
const bsTree = new BinarySearchTree();
bsTree.insert(7);
bsTree.insert(5);
bsTree.insert(9);
bsTree.insert(4);
bsTree.insert(6);
bsTree.insert(8);
bsTree.insert(10);
bsTree.remove(9)
console.log(bsTree.toList())
console.log(bsTree.max())
console.log(bsTree.min())
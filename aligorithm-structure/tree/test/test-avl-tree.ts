
import { AVLTree } from '../AVLTree';

const bsTree = new AVLTree();
bsTree.insert(4);
bsTree.insert(2);
bsTree.insert(1);
bsTree.insert(5);
bsTree.insert(6);
console.log(bsTree.toList())
bsTree.remove(1);
console.log(bsTree.toList())

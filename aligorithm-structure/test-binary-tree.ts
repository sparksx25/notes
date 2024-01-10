import { binaryTree2Array, createCBT, dlr, ldr, lrd } from './BinaryTree';


const cbtTree = createCBT([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const list = binaryTree2Array(cbtTree!);
console.log(list);
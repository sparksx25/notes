import { createCBT, dlr, ldr, lrd } from './BinaryTree';



const cbtTree = createCBT([1, 2, 3, 4, 5, 6, 7]);
const list: number[] = [];

lrd(cbtTree!, (data) => {
  list.push(data);
});

console.log(list);
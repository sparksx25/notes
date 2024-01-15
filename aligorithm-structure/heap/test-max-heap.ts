import { MaxHeap } from './MaxHeap'


const heap = new MaxHeap();

heap.push(1)
heap.push(5)
heap.push(10)
heap.push(4)
heap.push(2)
heap.push(5)
heap.push(6)
heap.pop();
console.log(heap.top()) // 6
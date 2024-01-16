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


const initialHeap = new MaxHeap<number>();
initialHeap.reset(5,23,1,3,45,3);
console.log(initialHeap.top()) // 45
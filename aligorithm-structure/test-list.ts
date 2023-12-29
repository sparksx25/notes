import { List } from './interface';
import { ArrayList } from './ArrayList';

const arr: List<string> = new ArrayList<string>(1);
console.log(arr.add('a')); 
// 1,  ["a"]
console.log(arr.add('b')); 
// 2,  ["a", "b"]
console.log(arr.add('c', 2));
// 3, ["a", "b", "c"]
console.log(arr.remove(1));
// b, ["a", "c"]
console.log(arr.size());
// 2, ["a", "c"]
console.log(arr.push('d'));
// 3, ["a", "c", "d"]
console.log(arr.push('e', 'f'));
// 5, ["a", "c", "d", "e", "f"]
console.log(arr.pop());
// f, ["a", "c", "d", "e"]
console.log(arr.unshift('a'));
// 5, ["a", "a", "c", "d", "e"]
console.log(arr.shift()); 
// a, ["a", "c", "d", "e"]
console.log(arr.remove(-1));
// e, ["a", "c", "d"]
console.log(arr);
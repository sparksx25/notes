import { LinkedHashMap } from './LinkedHashMap';
import { LinearHashMap } from './LinearHashMap'

class Person {
  constructor(public id: number, public name: string) {}

  hashCode(): number {
    const identifier = String(this.id) + String(this.name);
    let hash = 0;
    for (let i = 0; i < identifier.length; i++) {
      hash = (hash + identifier[i].charCodeAt(0)) % 1000_000_000;
    }
    return hash;
  }
  
  toString() {
    return `(id: ${this.id}, name: ${this.name})`;
  }
}

const Li = new Person(1, 'Li');
const Ma = new Person(2, 'Ma');

const map = new LinearHashMap(1);
map.set(1, 'a');
map.set('1', 'b');
map.set(Li, 'li');
map.set(Ma, 'ma');
console.log(map.get(Ma));
console.log(map.delete(1));
console.log(map.has('1'));
console.log(map.size());
console.log(map.toString())

var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]
const arrTeenager = people.filter(people => people.age>=10 && people.age<=20)
console.log({arrTeenager})
/*
1) Написать класс, реализующий двусвязный список.
Предусмотреть методы поиска, вставки, удаления,
изменения элемента и определения длины списка.
 */

import {DoubleLinkedList} from "./DoubleLinkedList.js";

let list = new DoubleLinkedList()

list.append(3)
list.prepend(1)
list.insert(1, 2)
list.insert(3, 4)

list.print()
console.log("======================")

list.set(0, 11)
list.print()
console.log("======================")

list.delete(2)
list.print()
console.log("Length = " + list.len)

console.log("======================")

console.log("Find idx of val = 2")
console.log("Result: " + list.findIdx(2))
console.log("======================")
console.log("Find idx of val = 3")
console.log("Result: " + list.findIdx(3))
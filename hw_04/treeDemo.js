import {BinaryTree} from "./BinaryTree.js";

let bt = new BinaryTree()

bt.insertAll([9,2,4,3,5,20,21,1,6,10,8])

console.log('inorder traversal')
bt.print()
console.log('===========================')

console.log('Search 5: ' + bt.search(5))
console.log('Search 22: ' + bt.search(22))
console.log('Search 10: ' + bt.search(10))

console.log('depth = ' + bt.depth())

console.log('===========================')
console.log('delete 3')
bt.delete(3)

console.log('===========================')
bt.print()
console.log('===========================')

console.log('delete 2')
bt.delete(2)
console.log('===========================')
bt.print()
console.log('===========================')
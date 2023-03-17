/*

6) Написать класс, реализующий бинарное дерево.
Предусмотреть методы поиска, вставки,
удаления, изменения элемента и определения высоты дерева.
 */

class BinaryTree {
    #root

    insert(val) {
        let node = new Node(val, null, null)

        if(!this.#root)
            this.#root = node
        else
            this.#rec_insert(this.#root, node)
    }

    insertAll(vals) {
        for(let i in vals){
            this.insert(vals[i])
        }
    }

    #rec_insert(root, node) {
        if (root.val < node.val) {
            if (root.right)
                this.#rec_insert(root.right, node)
            else
                root.right = node
        } else if (root.val > node.val) {
            if (root.left)
                this.#rec_insert(root.left, node)
            else
                root.left = node
        }
    }

    search(val) {
        return this.#dfs(this.#root, val) != null
    }

    #dfs(root, val) {
        if (root === null)
            return null

        if (val === root.val)
            return root
        else if (val < root.val)
            return this.#dfs(root.left, val);
        else
            return this.#dfs(root.right, val)
    }

    depth() {
        return this.#rec_depth(this.root, 0)
    }

    #rec_depth(root, d) {
        if (!root)
            return d
        return Math.max(this.#rec_depth(root.left, d+1),
            this.#rec_depth(root.right, d+1))
    }

    delete(val) {
        this.#rec_delete(this.#root, val)
    }

    #rec_delete(root, val) {
        if (!root)
            return null

       if (val < root.val) {
           root.left = this.#rec_delete(root.left, val)
       } else if (val > root.val) {
           root.right = this.#rec_delete(root.right, val)
       } else {
           if (!root.left && !root.right) {
               root = null
           } else if (!root.left) {
               root = root.right
           } else if (!root.right) {
               root = root.left
           } else {
               //преемником является самый малый (левый) лист правого поддерева удаляемого узла
               let successor = this.#min_node(root.right)
               root.val = successor.val
               root.right = this.#rec_delete(root.right, successor.val)
           }
       }
       return root
    }

    #min_node(root) {
        while (root.left)
            root = root.left
        return root
    }


    print(){
        this.#print_inorder(this.#root)
    }
    #print_inorder(root){
        if (!root)
            return
        this.#print_inorder(root.left)
        console.log(root.val)
        this.#print_inorder(root.right)
    }

    get root() {
        return this.#root;
    }
}

class Node {
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }
}

export {BinaryTree}
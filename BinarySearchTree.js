export class BinarySearchTree{
    constructor(){
        this.root = null
        this.height = 0
    }

    add(val){
        var node = new Node(val)
        if(this.height == 0){
            this.root = node
            this.height = 1
        }else{

            var cur = this.root
            var found = false
            while(!found){
                if(val < cur.val){
                    if(!cur.left){
                        cur.left = node
                        found = true
                    }else{
                        cur = cur.left
                    }
                }else{
                    if(!cur.right){
                        cur.right = node
                        found = true
                    }else{
                        cur = cur.right
                    }
                }
            }
        }
    }
    
}

class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}
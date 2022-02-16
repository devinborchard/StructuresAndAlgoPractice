export class LinkedList{
    constructor(){
        this.length = 0
        this.head = null
    }

    addVal(val){

        var node = new Node(val)

        if(this.length == 0){
            this.head = node
        }
        else{
            var cur = this.head
            while(cur.next != null){
                cur = cur.next
            }
            cur.next = node
        }

        this.length = this.length + 1
    }

    pop(){
        var cur = this.head
        var prev = null
        while(cur.next != null){
            prev = cur
            cur = cur.next
        }
        prev.next = null
        this.length = this.length -1

    }

    printList(){
        var cur = this.head
        var str = 'length: '+this.length+' '
        while(cur != null){
            str = str + '['+cur.val+']->'
            cur = cur.next
        }
        str = str + 'null'
        console.log(str)
    }

    insert(val, index){
        if(index > this.length){
            print('ERROR: INDEX EXCEEDED LIST LENGTH')
        }
        else{
            var node = new Node(val)
            var cur = this.head
            var prev = null
            for(let i = 0; i < index; i++){
                prev = cur
                cur = cur.next
            }
            prev.next = node
            node.next = cur
            this.length = this.length + 1

        }
        
    }
}


class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

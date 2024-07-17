import {Node} from '../linkedlist/linkedlist.mjs'

class HashMap {

    constructor(){
        this.capacity = 16;
        this.loadfactor = .75;
        this.array = Array(this.capacity);
    }

    hash(key) {
        let constant = .69;
        let table_size = this.capacity;
        let hashcode = 0;
        for(let i = 0; i < key.length; i++){
            hashcode += Math.floor(table_size * (key.charCodeAt(i) % constant));
        }
        hashcode = hashcode % this.capacity;

        return hashcode;
    }

    set(key, value){
        let bucket = this.hash(key);
        //creating linked list in case of collision
        let node = new Node();
        node.key = key;
        node.value = value;
        if(this.array[bucket] != null){
            let curNode = this.array[bucket];
            if(curNode.key !== node.key){
                while(curNode.nextNode !== null){
                    curNode = curNode.nextNode;
                }
                curNode.nextNode = node;
            }
            else {
                curNode.value = node.value;
            }
        }
        else {
            this.array[bucket] = node;
        }

    }
    get(key) {
        let bucket = this.hash(key);
        if(this.array[bucket] !== undefined) {
            let curNode = this.array[bucket];
            if(curNode.key === key){
                return curNode.value;
            }
            else {
                while(curNode.key !== key) {
                    curNode = curNode.nextNode;
                }
                return curNode.value;
            }
        }
        if(this.array[bucket] === undefined) {
            return null;
        }

    }

    has(key) {
        return Boolean(this.get(key));
    }

    remove(key) {

    }
    
}

let hash = new HashMap();
hash.set("test", "apple");
hash.set("test", "bannana");
hash.set("fruit", "apple");
hash.set("blest", "test");
hash.set("lest", "test1");

console.log(hash.has("ladaest")); 
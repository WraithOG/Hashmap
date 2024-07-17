import {LinkedList} from '../linkedlist/linkedlist.mjs'

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

        return hashcode;
    }

    set(key, value){
        let bucket = this.hash(key) % this.capacity;
        //creating linked list in case of collision
        if(this.array[bucket] != null && this.array[bucket][0] != key){
            let list = new LinkedList();
            list.append(this.array[bucket]);
            list.append(key, value);
        }
        else {
            this.array[bucket] = [key, value];
        }

    }
    get(key) {
        let bucket = this.hash(key);
        if(this.array[bucket] != null) {
            return this.array[bucket][1];
        }
        else {
            return null;
        }
    }

    has(key) {
        let bucket = this.hash(key);
        if (this.array[bucket] === undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    
}

let hash = new HashMap();
hash.set("test", "apple");
hash.set("test", "bannana");
hash.set("fruit", "apple");

console.log(hash.has("test"));
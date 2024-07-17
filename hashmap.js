class HashMap {
    hash(key) {
        let constant = .69;
        let table_size = 16;
        let hashcode = 0;
        for(let i = 0; i < key.length; i++){
            hashcode += Math.floor(table_size * (key.charCodeAt(i) % constant));
        }

        return hashcode;
    }
    
}
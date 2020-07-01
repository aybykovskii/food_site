'use strict';

class User{
    #name = 'Alex';
    #surname = 'Tyrickov';

    get name(){
        return this.#name
    }

    set name(name){
        this.#name = name;
    }
}

let Alex = new User();
console.log(Alex.name);
console.log(Alex.name = 'Ivan');
console.log(Alex.name);
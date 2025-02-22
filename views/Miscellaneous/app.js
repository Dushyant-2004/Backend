let arr =[1,2,3,4,5,6,7,8,9,10];
console.log(arr);
arr.sayHello = function(){  
    console.log('Hello');
};

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        sayHello: function() {
            console.log('Hello');
        },
    };
}

class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Hello');
    }
}
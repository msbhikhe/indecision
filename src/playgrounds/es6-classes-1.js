class Person{
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi ! ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
};

const me = new Person();
console.log(me.getDescription());

const other = new Person('Robin', 27);
console.log(other.getDescription());
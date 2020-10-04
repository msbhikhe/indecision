class Person{
    constructor(name = 'test') {
        this.name = name;
    }

    getGreeting() {
        return `Hi ! ${this.name}`;
    }
};

const me = new Person();
console.log(me.getGreeting());

const other = new Person('Robin');
console.log(other.getGreeting());
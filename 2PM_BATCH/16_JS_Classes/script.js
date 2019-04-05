class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Instance Method
    print() {
        return `First Name : ${this.firstName}
                Last Name : ${this.lastName}
                Age : ${this.age}`;
    }

    // static method
    static getClass(){
        console.log('Iam from Person Class');
    }
}

class Customer extends Person{

    constructor(firstName , lastName , age , location){
        super(firstName,lastName,age);
        this.location = location;
    }

    // Instance Method
    print(){
        return `First Name : ${this.firstName}
                Last Name : ${this.lastName}
                Age : ${this.age}
                Location : ${this.location}`;
    }

    // static method
    static getClass(){
        console.log('Iam from Customer Class');
    }
}

// Object Creation
let customer1 = new Customer('Rajan','Jain',25,'Hyderabad');
let customerInfo = customer1.print();
console.log(customerInfo);
Customer.getClass();
Person.getClass();
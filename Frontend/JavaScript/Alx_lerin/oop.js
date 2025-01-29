/*
This declares a class called Person, with:

a name property.
a constructor that takes a name parameter that is used to initialize the new object's name property
an introduceSelf() method that can refer to the object's properties using this.
*/
class Person {
    name;
    constructor(name){
        this.name = name;
    }
    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}
//create a new object
const giles = new Person("Giles");
giles.introduceSelf();

/**
 * Given our Person class above, let's define the Professor subclass.
 */

class Professor extends Person {
    teaches;
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }
    introduceSelf() {
        console.log(
          `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
        );
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

/*
 In this class declaration, #year is a private data property. We can construct a Student object,
 and it can use #year internally, but if code outside the object 
 tries to access #year the browser throws an error
*/
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf();
walsh.grade("my paper");

class Student extends Person {
    #year;
  
    constructor(name, year) {
      super(name);
      this.#year = year;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
    }
  }
  
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

//summers.#year; // SyntaxError

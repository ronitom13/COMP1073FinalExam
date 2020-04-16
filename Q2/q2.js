// JavaScript Document

//Object template that represents a Person with properties such as name, age, gender and interests
class Person {
  constructor(name, age, gender, interests) {
    this.name=name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  //greeting function to greet the users.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
  //bye function to let know that the use left. 
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

//Instantiating two new Person objects.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//Object template that represents a Teacher which inherits properties such as name, age, gender and interests from the Person Object 
//with additional properties such as subject and grade.
class Teacher extends Person {
  constructor(name,age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

//Instantiating a Teacher object.
let teacher1 = new Teacher('James',32, "male", ['JavaScript', 'Games', 'Java'], 'Javascript','A');
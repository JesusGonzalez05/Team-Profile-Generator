// require Epmloyee class 
const Employee = require('./Employee');

// create a new class that extends Employee
class Intern extends Employee {
//create contructor and pass in values for intern 
  constructor(name, id, email){
// inherites name id and email from super   
    super(name, id, email);
    this.school = school;
  };
//get school function
    getschool() {
      return this.school
    };
//overridden to retun 'Intern'
    getRole() {
      return 'Intern';
    };
};

module.export = Intern
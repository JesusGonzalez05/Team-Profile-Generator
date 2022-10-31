// require Epmloyee class 
const Employee = require('./Employee');

// create a new class that extends Manager
class Manager extends Employee {
//create contructor and pass in values for Manager 
  constructor(name, id, email){
// pass name id and email to super   
    super(name, id, email);
    this.officeNumber = officeNumber;
  };
//get school function
    getofficenumber() {
      return this.officeNumber
    };
//overridden to retun 'Intern'
    getRole() {
      return 'Manager';
    };
};

module.export = Manager;
// require Epmloyee class 
const Employee = require('./Employee');

// create a Engineer class that extends Employee
class Engineer extends Employee {
//create contructor and pass in values for intern 
  constructor(name, id, email){
// pass name, id and email to super plus Github 
    super(name, id, email);
    this.github = github;
  };
//get Github function
    getGithub() {
      return this.github
    };
//overridden to retun 'Engineer'
    getRole() {
      return 'Engineer';
    };
};

module.export = Engineer;
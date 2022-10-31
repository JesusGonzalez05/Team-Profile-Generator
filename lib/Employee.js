// create employee class
class Employee {
//create emplyee constructor
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

//get method grabs users entered name 
    getName(){
      return this.name
    };
//get method grabs users entered id 
    getId(){
      return this.id
    };
//get method grabs users entered email 
    getEmail(){
      return this.email
    };

};

// should return 'Employee'
getRole();

module.export = Employee;
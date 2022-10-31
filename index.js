// where inquier and questions will take place
// require modules and files
const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const pageTemplate = require('./src/page-template');

// answer to questions 
const newStaffMember = [];
//prompt questions via inquirer
const managerQuestions = [
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the team managers name?',
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'What is the team managers id?',
      },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is the team managers email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What the team managers office number?',
    },
];

const  typeOfEmployee = [
    {
      type: 'list',
      message: 'What would you like to do next?',
      name: 'position',
      choices: ['Create an employee.', 'Create an intern.', 'Finish building my team!'],
    }
];


function askManager() {
  inquirer.prompt(managerQuestions)
  .then(function (answers){
    const Manager = new Manager(
    answers.managerName,
    answers.ManagerId,
    answers.managerEmail,
    answers.officeNumber,
    );
    newStaffMember.push(Manager);
    menuQuestions();
  })};

// add type of employee
function menuQuestions() {
    inquirer.prompt(typeOfEmployee)
    .then(function(userChoice) {
        if (userChoice.menu === 'add an engineer') {
          //prompt engineer questions
        } else if (userChoice.menu === 'add an intern'){
         //prompt intern questions
        } else {
        // build team function
        }
    });
}



  //if the manager wants to add an employee 
  if (answers.position === 'Create an employee.'){

  } else if (questions.position === 'Create an intern.'){

  } else if (questions.position === 'Finish building my team!') {

  };

  askManager();
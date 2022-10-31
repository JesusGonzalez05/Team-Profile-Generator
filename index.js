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
//prompt manager questions
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

//prompt user to add another employee
const  typeOfEmployee = [
    {
      type: 'list',
      message: 'What would you like to do next?',
      name: 'position',
      choices: ['Create an engineer.', 'Create an intern.', 'Finish building my team!'],
    }
];

// prompt engineer questions
const engineerQuestions = [
    {
      type: 'input',
      message: 'What is the engineers name?',
      name: 'engineerName',
    },  
    {
      type: 'input',
      message: 'What is the engineers ID number?',
      name: 'engineerId',
    }, 
    {
      type: 'input',
      message: 'What is the engineers email?',
      name: 'engineerEmail',
    }, 
    {
      type: 'input',
      message: 'What is the engineers github username?',
      name: 'engineerGithub',
    },
]

// prompt intern questions
const internQuestions = [
    {
      type: 'input',
      message: 'What is the interns name?',
      name: 'internName',
    },  
    {
      type: 'input',
      message: 'What is the interns ID number?',
      name: 'internId',
    }, 
    {
      type: 'input',
      message: 'What is the interns email?',
      name: 'internEmail',
    }, 
    {
      type: 'input',
      message: 'Where does the intern study?',
      name: 'internSchool',
    },
]

//create manager function
function createManager() {
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
    //calls createEngineer function
      createEngineer();
    } else if (userChoice.menu === 'add an intern'){
    //calls createIntern function
      createIntern();
    } else {
    // calls createTeam function
    createTeam();
    }
    });
};

// create engineer function
function createEngineer() {
  inquirer.prompt(engineerQuestions)
  .then(function(answers) {
    const Engineer = new Engineer(
      answers.engineerName, 
      answers.engineerId, 
      answers.engineerEmail, 
      answers.engineerGithub
      );
    newStaffMember.push(Engineer);
    menuQuestions();
    });
};

// create intern function
function createIntern() {
    inquirer.prompt(internQuestions)
    .then(function(answers) {
        const intern = new Intern(
          answers.internName, 
          answers.internId, 
          answers.internEmail, 
          answers.internSchool
        );
        newStaffMember.push(intern);
        menuQuestions();
    });
};

// creates team function
function createTeam() {
    const fileName = 'team';
    fs.writeFileSync(`./dist/${fileName}.html`, generateSite(teamMembers), 'utf-8');
}

createManager();
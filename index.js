const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeamSite = require("./src/page-template.js");

const team = [];

function managerPrompts()
{
  inquirer
  .prompt([
// MANAGER PROMPS
    {
      type: 'input', 
      message: 'Team Manager name:',
      name: 'managername',
    },
    {
      type: 'input',
      message: 'Manager Employee ID:',
      name: 'managerid',
    },
    {
      type: 'input',
      message: 'Managers E-mail Address:',
      name: 'manageremail',
    },
     {
      type: 'input',
      message: 'Manager Office Number:',
      name: 'officenumber',
    }
    ]).then((managerAnswers) => {
      const manager = new Manager(
        managerAnswers.managername,
        managerAnswers.managerid,
        managerAnswers.manageremail,
        managerAnswers.officenumber)
      team.push(manager);
      addEmployee();
    })
}
// PROMPT MANAGER TO ADD OTHER EMPLOYEES
function addEmployee()
{
  inquirer
  .prompt([
    {
      type:'list',
      name:'userchoice',
      message:'Please select which employee you would like to add to your team:',
      choices:['Engineer','Intern','I have no other employee to add'],
    },
  ]).then((userInput) => {
    switch(userInput.userchoice) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        userTeam();
    }
  })
}
function addEngineer()
{
  inquirer
  .prompt([
// ENGINEER PROMPTS
    {
        type: 'input',
        message: 'What is the Engineers name?',
        name:'engineername',
    },
    {
        type:'input',
        message: 'What is the Engineers ID?',
        name:'engineerid',
    },
     {
        type:'input',
        message: 'What is the Engineers email?',
        name:'engineeremail',
    },
     {
        type:'input',
        message: 'What is the Engineers GitHub UserName?',
        name:'engineergithub',
    },
  ]).then((engineerAnswers) => {
    const engineer = new Engineer(engineerAnswers.engineername, engineerAnswers.engineerid, engineerAnswers.engineeremail, engineerAnswers.engineergithub)
      team.push(engineer);
      addEmployee();
  })
}

// INTERN PROMPTS
function addIntern()
{
  inquirer.prompt([
    {
        type:'input',
        message: 'What is the Interns Name?',
        name:'internname',
    },
     {
        type:'input',
        message: 'What is the Interns ID?',
        name:'internid',
    },
     {
        type:'input',
        message: 'What is the Interns email?',
        name:'internemail',
    },
     {
        type:'input',
        message: 'What is the Interns School?',
        name:'internschool',
    }
  ]).then((internAnswers) => {
      const intern = new Intern (internAnswers.internname, internAnswers.internid, internAnswers.internemail, internAnswers.internschool)
        team.push(intern);
        addEmployee();
    })
};
console.log(team);

// FUNCTION WRITE HTML FILE
function userTeam()
{
  if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath,generateTeamSite(team), 'utf-8');
    console.log('The team generator file has been successfully completed!')
}

managerPrompts();
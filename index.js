const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

const render = require("./src/page-template.js");

const team = [];

function addManager()
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
      message: 'Manager E-mail Address:',
      name: 'manageremail',
    },
     {
      type: 'input',
      message: 'Manager Office Number:',
      name: 'officenumber',
    },
     {
        type: 'list',
        message: 'Who would you like to add to yout team?',
        name: 'license',
        choices: ['Engineer', 'Intern']
     },
    ]).then(managerAnswers, function(){
      const manager = new Manager(managerAnswers.managername, managerAnswers.managerid, managerAnswers.manageremail, managerAnswers.officenumber)
      team.push(manager);
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
  ]).then(engineerAnswers, function(){
    const engineer = new Engineer(engineerAnswers.engineername, engineerAnswers.engineerid, engineerAnswers.engineeremail, engineerAnswers.engineergithub)
      team.push(engineer);
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
    }.then(interAnswers, function(){
      const intern = new Intern (internAnswers.internname, interAnswers.internid, internAnswers.internemail, interAnswers.internschool)
        team.push(intern);
    })
  ])
}
// FUNCTION ADD TEAM MEMBER
function teamChoice(){
  //this will be a prompts for adding a specific role to the team
  inquirer.prompt([
    {
      type:'confirm',
      message:'would you like to add an additional team member?',
      name: 'addteam',
    }
  ])
}

// FUNCTION WRITE HTML FILE
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'Enter your First and Last Name:'
        },
        { 
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
          },
          {
            type: 'input',
            name: 'about',
            message: 'Provide a description of your project.'
          },
          {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
          {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
          },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
    ]);
};


// TODO: Create a function to write README file
function writeToFile('README.md',  data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

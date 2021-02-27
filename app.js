// packages needed for this application

const inquirer = require('inquirer');
const generateReadMe = require('./src/ReadMe-template.js');
const writeReadMe = require('./utils/generateReadMe.js');
const licenses = require('./utils/licenses.js');

const licenseName = (licenses) => {
    list = licenses.map((obj = obj => obj.name));
    return list;
}

// An array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
        { 
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('You need to enter your project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter your GitHub Username (Required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email address  (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your Email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your  project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },     
        {
            type: 'list',
            name: 'license',
            message: "Please choose a license",
            choices: licenseName(licenses)
        },
        {
            type: 'input',
            name: 'deployedLink',
            message: 'Enter the deployed GitHub link of your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                return true;
                } else {
                    console.log('You need to enter the url of your application. (Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Enter the instructions of how to install your application. (Required)',
            validate: linkInput => {
                if (linkInput) {
                return true;
                } else {
                    console.log('Please enter the instructions to install your application. (Required)');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usageInstructions',
            message: 'Enter usage instructions of the application. (Required)',
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                    console.log('Please enter usage instructions. (Required)');
                    return false;
                }
            }
        }
    ]
    )};

    const promptContributors = contributors => {
        if (!contributors.credits) {
            contributors.credits=[];
        }
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmContributors',
                message: 'Is there any contributors for your project?',
                default: false
            },
            {
                type: 'input',
                name: 'contributorsGitHub',
                message: 'Please enter the GitHub username of the contributor',
                when: ({confirmContributors}) => {
                    if (confirmContributors) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
    ])
    .then(contributorsData => {
        contributors.credits.push(contributorsData);
        if (contributorsData.confirmContributors) {
            return promptContributors(contributors)
        } else {
            return contributors
        }
    });
};

promptUser()
    .then(promptContributors)
    .then(readmeInfo => {
        console.log(readmeInfo);
        return generateReadMe(readmeInfo);
    })
    .then(readmeData => {
        return writeReadMe(readmeData);
    })
    .then(writeResponse => {
        console.log (`
        ${writeResponse.message}`);
    })
    .catch(err => console.log(err));

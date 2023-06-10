const inquirer = require('inquirer');
const fs = require('fs');
const genREADME=require('./genREADME');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitName',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'gitEmail',
        },
        {
            type: 'input',
            message: "What is your project's name?",
            name: 'projName',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project',
            name: 'projDescrp',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'projLicense',
            choices:['MIT','APACHE 2.0','GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'projDepend',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'projTest',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'projNTK',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'projContrib',
        }
    ])
    .then(({ gitName, gitEmail, projName, projDescrp, projLicense, projDepend, projTest, projNTK, projContrib }) => {
        fs.writeFile('testREADME.md', genREADME(gitName, gitEmail, projName, projDescrp, projLicense, projDepend, projTest, projNTK, projContrib), (err) => err ? console.error(err) : console.log('Done!')
        );
    });


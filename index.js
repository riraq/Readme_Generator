// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

// function that uses inquirer package in order to ask user questions about how to generate the readme and then generates the readme
function init() {
    inquirer
    // initializes prompts to gather user info for readme
        .prompt([
            {
                // adds a title to the readme
                type: 'input',
                message: 'What is the title of this project?',
                name: 'title',
            },
            {
                // gives a description of the project
                type: 'input',
                message: 'Please give a description of the project.',
                name: 'description',
            },
            {
                // what needs to be installed in order to run the application
                type: 'input',
                message: 'What are the steps for installation?',
                name: 'installation',
            },
            {
                // what is this application used for/who would use it
                type: 'input',
                message: 'Who would use this application and what for?',
                name: 'usage',
            },
            {
                // add contributors
                type: 'input',
                message: 'Were there any contributors on this project?',
                name: 'contribution',
            },
            {
                // how to run tests
                type: 'input',
                message: 'How are the tests run for this application?',
                name: 'testing',
            },
            {
                // what license is used for this application
                type: 'list',
                message: 'What license should be used for this application?',
                name: 'license',
                choices: ['Apache License 2.0', 'GNU GPLv3', 'Mozilla Public License 2.0', 'MIT License', 'None'],
            },
            {
                // prompt user for their github username for contacting
                type: 'input',
                message: 'What is your GitHub username to be added to the Contact section?',
                name: 'github',
            },
            {
                // prompt user for email to be added to a 'questions?' section
                type: 'input',
                message: 'What is your email address to be added to the Questions section?',
                name: 'email',
            }
        ])

        // returns license badge and formatting for license section
        .then((response) => {
            generateMarkdown.renderLicenseBadge(response);
            generateMarkdown.renderLicenseLink(response);
            generateMarkdown.renderLicenseSection(response);
            return response;
        })

        // inputs the data from the license and user prompt and returns a filled out and formatted readme
        .then((data) => {
            // returns markdownTemplate variable
            generateMarkdown.generateMarkdown(data, licenseBadge, licenseSection)
            return markdownTemplate
        })
        
        // writes the readme data to a readme file named generatedReadme.md
        .then((toBeWritten) => {
            fs.writeFile('generatedReadme.md', toBeWritten, (err) =>
                err ? console.error(err) : console.log('Success!')
            );
        })
}

// Function call to initialize app
init();

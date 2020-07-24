const inquirer = require("inquirer");

// array of questions for user
const questions = [{
    title: "What is the title of your project?",
    description: "Enter a description of your project",
    installation: "Enter any installation instructions",
    usage: "Enter usage information",
    contribution: "Enter contribution guidelines",
    test: "Enter test instructions"
}];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt([
        {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
        },
        {
        type: "input",
        message: "Enter a description of your project",
        name: "description"
        },
        {
        type: "input",
        message: "Enter any installation instructions",
        name: "installation"
        },
        {
        type: "input",
        message: "Enter usage information",
        name: "usage"
        },
        {
        type: "input",
        message: "Enter contribution guidelines",
        name: "contribution"  
        },
        {
        type: "input",
        message: "Enter test instructions",
        name: "test"  

        }
    ])
    .then(function(response) {

        console.log(JSON.stringify(response));
    });


}

// function call to initialize program
init();

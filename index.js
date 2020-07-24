const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
// const questions = [{
//     title: "What is the title of your project?",
//     description: "Enter a description of your project",
//     installation: "Enter any installation instructions",
//     usage: "Enter usage information",
//     contribution: "Enter contribution guidelines",
//     test: "Enter test instructions"
// }];

// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile("README.md", response)
// }

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
        fs.writeFile("README.md", `# ${response.title}`, function(err){
            if(err) {
                console.log(err)            }
        }) 
        fs.appendFile("README.md", "\n\n" + "## Description", function(err){
            if(err) {
                console.log(err)            }
        })
        fs.appendFile("README.md", "\n\n" + response.description, function(err){
            if(err) {
                console.log(err)            }
        })   
        fs.appendFile("README.md", "\n\n" + "## Installation Instructions", function(err){
            if(err) {
                console.log(err)            }
        })
        fs.appendFile("README.md", "\n\n" + response.installation, function(err){
            if(err) {
                console.log(err)            }
        })  
        fs.appendFile("README.md", "\n\n" + "## Usage", function(err){
            if(err) {
                console.log(err)            }
        })
        fs.appendFile("README.md", "\n\n" + response.usage, function(err){
            if(err) {
                console.log(err)            }
        })             
        fs.appendFile("README.md", "\n\n" + "## Contribution Guidelines", function(err){
            if(err) {
                console.log(err)            }
        })
        fs.appendFile("README.md", "\n\n" + response.contribution, function(err){
            if(err) {
                console.log(err)            }
        })             
        fs.appendFile("README.md", "\n\n" + "## Test Instructions", function(err){
            if(err) {
                console.log(err)            }
        })
        fs.appendFile("README.md", "\n\n" + response.test, function(err){
            if(err) {
                console.log(err)            }
        })                        
    });
}

// function call to initialize program
init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const queryUrl = `https://api.github.com/licenses`;

const writeFileAsync = util.promisify(fs.writeFile);



async function promptUser() {
  

  let response = await axios.get(queryUrl) 
    // console.log(response.data);

    let licenses = response.data.map(license => license.name)
    console.log(licenses)

  return inquirer.prompt([
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

      },
      {
        type: "list",
        message: "Choose a license",
        choices: licenses,
        name: "licenses"
      },
      {
        type: "input",
        message: "For questions, please enter your GitHub username",
        name: "github_username"
      }
  ]);
}

function generateREADME(answers) {

return`# ${answers.title}

## Description
${answers.description}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
${answers.installation}


## Usage
${answers.usage}


## Credits


## License
${answers.licenses}

## Badges


![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)


## Contributing 
${answers.contribution}


## Tests
${answers.test}

## Questions?
[${answers.github_username}](https://github.com/${answers.github_username})

`
;
}

promptUser()
  .then(function(answers) {
    const readme = generateREADME(answers);

    return writeFileAsync("README.md", readme);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });

  

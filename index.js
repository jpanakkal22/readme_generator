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
  // console.log(licenses)
   
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
      type: 'list',
      message: "Choose a badge",
      name: 'badge',
      choices:
       [
          {
          name: 'GNU Affero General Public License v3.0',
          value: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
          },
          {
          name: 'Apache License 2.0',
          value:'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
          },
          {
            name: 'BSD 2-Clause "Simplified" License',
            value:'[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
          },
          {
          name: 'BSD 3-Clause "New" or "Revised" License',
          value: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
          },
          {
          name: 'Boost Software License 1.0',
          value: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
          },
          {
          name: 'Creative Commons Zero v1.0 Universal',
          value: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
          },
          {
          name: 'Eclipse Public License 2.0',
          value:'[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
          },
          {
          name: 'GNU General Public License v2.0',
          value: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
          },
          {
          name: 'GNU General Public License v3.0',
          value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
          },
          {
          name: 'GNU Lesser General Public License v2.1',
          value: '[![License: GPL v2.1](https://img.shields.io/badge/License-GPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)'
          },
          {
          name: 'MIT License',
          value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' 
          },
          {
          name: 'Mozilla Public License 2.0',
          value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
          },
          {
          name: 'The Unlicense',
          value: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
          }
        ],
      },
      {
        type: "input",
        message: "For questions, please enter your GitHub username",
        name: "github_username"
      },
      {
        type: "input",
        message: "Enter your email address",
        name: "email"
      },
  ]);
}

function generateREADME(answers) {

return`# ${answers.title}
${answers.badge}

## Description
${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Badges](#badges)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.licenses}

## Badges
${answers.badge}

## Contributing 
${answers.contribution}

## Tests
${answers.test}

## Questions?
[${answers.github_username}](https://github.com/${answers.github_username})

You can also contact me at ${answers.email}

ScreenCastify Recording : https://drive.google.com/file/d/1mdqaWMOBxf80-NNFLaFXHf4QtggcryZR/view

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

  

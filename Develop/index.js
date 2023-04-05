const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'table of contents',
    message: 'Please provide the table of contents of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide a installtion description of your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please explain the usage of your project:',
  },
  {
    type: 'list',  // Use list type for the license question
    name: 'license',
    message: 'Please choose the license that fits your project:',
    choices: [
      'Apache-2.0',
      'MIT',
      'GPL-3.0',
      'BSD-3-Clause',
      'Unlicense'
    ]
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please add any contributers of your project:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please provide your Github username and link:',
  },
])
.then((answers) => {
  // Store the user's answers in an object
  console.log(answers);

  const licenseBadge = `[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/${answers.license})`;

  // Create the license notice based on the user's selection
  const licenseNotice = `This project is covered under the ${answers.license} license.`;

  // Create the README template using the user's answers and the license badge and notice
  const readmeTemplate = `
# ${answers.projectName}

## Description

${answers.description}

### Installation

${answers.installation}

### Usage

${answers.usage}

### License

${licenseBadge}

${licenseNotice}

### Contributing

${answers.contributing}

### Tests

${answers.tests}

### Questions

${answers.questions}
`;

  // Write the README file
  fs.writeFile('README.md', readmeTemplate, (err) => {
    if (err) throw err;
    console.log('README.md file created successfully!');
  });
});

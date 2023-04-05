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
    type: 'input',
    name: 'licence',
    message: 'Please choose the licence that fits your project:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please add any contributers of your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please provide your Github username and link:',
  },
  // Add more questions here...
])
.then((answers) => {
  // Store the user's answers in an object
  console.log(answers);

  // Create the README template using the user's answers
  const readmeTemplate = `
    # ${answers.projectName}

    ## Description

    ${answers.description}

    ### Installation

    ${answers.installation}

    ### Usage

    ${answers.usage}

    ### License

    ${answers.license}
  `;

  // Write the README file
  fs.writeFile('README.md', readmeTemplate, (err) => {
    if (err) throw err;
    console.log('README.md file created successfully!');
  });
});

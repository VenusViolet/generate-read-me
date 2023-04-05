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

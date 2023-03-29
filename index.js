// Add in necessary packages
const inquirer = require('inquirer');

// Create on array of questions that the user can answer via the command line
// Questions to ask include: text, color, and shape input, as well as shape color.
const questions = [
    {
      type: 'input',
      name: 'logo-text',
      message: 'Select characters for your logo. Enter up to three characters: ',
    },
    {
      type: 'checkbox',
      message: 'Select a shape for your logo',
      name: 'shape-type',
      choices: ['Circle','Square','Triangle'],
    },
    {
        type: 'input',
        name: 'logo-color',
        message: 'Select a color for the shape of your logo. Enter a color keyword (or a hexadecimal number):',
      },
      {
        type: 'input',
        name: 'text-color',
        message: 'Select a color for the text of your logo. Enter a color keyword (or a hexadecimal number):',
      },
  ]

// Create a constructor function for the logo

// Create a function to write the output to a .svg file

// Create a function to initialize the program
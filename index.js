// Add in necessary packages
const inquirer = require('inquirer');
const writeFile = require('fs/promises');
const {Circle, Square, Triangle} = require('./lib/shapes')
const fs = require('fs');
// const { text } = require('stream/consumers');

// Create on array of questions that the user can answer via the command line
// Questions to ask include: text, color, and shape input, as well as shape color.
const questions = [
    {
      type: 'input',
      name: 'logoText',
      message: 'Select characters for your logo. Enter up to three characters: ',
    },
    {
      type: 'list',
      message: 'Select a shape for your logo',
      name: 'shapeType',
      choices: ['Circle','Square','Triangle'],
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'Select a color for the shape of your logo. Enter a color keyword (or a hexadecimal number):',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Select a color for the text of your logo. Enter a color keyword (or a hexadecimal number):',
      },
  ]

// Create a constructor function for the logo
class Logo {
    constructor(color, textcolor, text, shapetype) {
        this.color = color;
        this.textcolor = textcolor;
        this.text = text;
        this.shapetype = shapetype;
    }
  }

// Create a function to write the output to a .svg file
function svgFile(fileName, data) {
    fs.writeFile(fileName,data,(error) => {
        if (error) throw error;
        console.log("Your logo has been generated!")
    })
}

// Create asynchronous function using promises including a new instance of the logo construction function
// part of the function will have to gather the user's responses. 
function shapeBuilder(logoData) {
    console.log("starting to build shape")
    const logo = new Logo ()
    logo.color = logoData.logoColor
    logo.textcolor = logoData.textColor
    logo.text = logoData.logoText
    logo.shapetype = logoData.shapeType

    if (logo.text.length > 3 || logo.text.length === 0) {
        console.log("Your logo must have between 1 and 3 characters. Try again!")
        return init()
    } 
    
    switch(shapetype){
        case "Circle":
            fileName = 'logo.svg'
            Shape = "Circle"
            console.log(Shape)
            shapeString = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${logo.color}"></circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="${logo.textcolor}">${logo.text}</text></svg>`
            return svgFile(fileName, shapeString)
        break; 

        case "Square":
            fileName = 'logo.svg'
            Shape = "Square"
            console.log(Shape)
            return svgFile(fileName, shapeString)
        break;

        case "Triangle":
            fileName = 'logo.svg'
            Shape = "Triangle"
            console.log(Shape)
            return svgFile(fileName, shapeString)
        break;
    }

}

// Create a function to initialize the program

function init() {
    console.log("Build your Logo by answering the following questions!");
    inquirer
        .prompt(questions)
        .then((data) => {
          text = data.logoText
          textcolor = data.textColor
          color = data.shapeColor
          shapetype = data.shapeType 
          return shapeBuilder(data)

        })
        .catch((error) => {
            console.log(error)
        })

    // svgFile(fileName)
  }
  
init();
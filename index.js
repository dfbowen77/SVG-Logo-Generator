// Add in necessary packages
const inquirer = require('inquirer');
const writeFile = require('fs/promises');
// The following line is an example of destructuring. I only need Circle, Square, and Triangle from the shapes file. Thus, I only take out what I need from the shapes file. That is the basic premise of destructuring. Make life easy and only extract what you need. 

const {Circle, Square, Triangle} = require('./lib/shapes')
const fs = require('fs');

// Here is where the questions for the user to answer are created. 
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

// This is a constructor function for the logo. It is called later in the program when a new logo needs to be created. 
class Logo {
    constructor(color, textcolor, text, shapetype) {
        this.color = color;
        this.textcolor = textcolor;
        this.text = text;
        this.shapetype = shapetype;
    }
  }

// This function takes in a fileName (e.g. logo.svg) and data (e.g. an svg string) and it uses that information to write a file. 
function svgFile(fileName, data) {
    fs.writeFile(fileName,data,(error) => {
        if (error) throw error;
        console.log("Your logo has been generated!")
    })
}

// This function takes in inputs from the user pertaining to their logo and it returns a fileName and an SVG string. 
function shapeBuilder(logoData) {
    console.log("starting to build shape")
    const logo = new Logo ()
    logo.color = logoData.logoColor
    logo.textcolor = logoData.textColor
    logo.text = logoData.logoText
    logo.shapetype = logoData.shapeType

    // The next three lines are used to validate the length of the logo text to ensure there is between 1 and 3 characters.
    if (logo.text.length > 3 || logo.text.length === 0) {
        console.log("Your logo must have between 1 and 3 characters. Try again!")
        // The return init() sends the user back to the beginning of the program if they entered an invalid number of characters. 
        return init()
    } 
    // This switch case statement determines whether the user selected a Circle, Square, or Triangle; then it renders the appropriate logo and passes the fileName and shapeString onto the svgFile function.  
    switch(shapetype){
        case "Circle":
            fileName = 'logo.svg'
            Shape = "Circle"
            // The next line creates a new instance of the Circle function and names it circle. Then methods within the Circle function called setColor, setTextColor, and setText are used to set the approriate values. Finally, the render method from the Circle function is used to put all of that information together to create the shapeString.  
            const circle = new Circle();
            circle.setColor(logo.color)
            circle.setTextColor(logo.textcolor)
            circle.setText(logo.text)
            shapeString = circle.render()
            return svgFile(fileName, shapeString)
        break; 

        case "Square":
            fileName = 'logo.svg'
            Shape = "Square"
            const square = new Square();
            square.setColor(logo.color)
            square.setTextColor(logo.textcolor)
            square.setText(logo.text)
            shapeString = square.render()
            return svgFile(fileName, shapeString)
        break;

        case "Triangle":
            fileName = 'logo.svg'
            Shape = "Triangle"
            const triangle = new Triangle();
            triangle.setColor(logo.color)
            triangle.setTextColor(logo.textcolor)
            triangle.setText(logo.text)
            shapeString = triangle.render()
            return svgFile(fileName, shapeString)
        break;
    }

}

// This asynchronous function also initializes the program. Users are asked questions, and then the program waits for their answers, and if there are no errors it then returns the user's responses to the shapeBuilder function where the logo is created. 
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

  }
  
init();
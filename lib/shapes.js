// create a constructor function for the shape

class Shape {
    constructor(color, textcolor, text) {
      this.color = color;
      this.textcolor = textcolor;
      this.text = text;
    }
  }

// create individual functions for each of the types of shapes
class Circle extends Shape {
    constructor(color, textcolor, text, shapetype) {
      super(color, textcolor, text);
      this.shapetype = shapetype;
    //   render the shape on the next line
    }
  }

  
  class Square extends Shape {
    constructor(color, textcolor, text, shapetype) {
      super(color, textcolor, text);
      this.shapetype = shapetype;
    //   render the shape on the next line
    }
  }

  class Triangle extends Shape {
    constructor(color, textcolor, text, shapetype) {
      super(color, textcolor, text);
      this.shapetype = shapetype;
    //   render the shape on the next line
    }
  }

  module.exports = {Circle, Square, Triangle};
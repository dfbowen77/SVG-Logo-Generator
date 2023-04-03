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

    }
    setColor(color){
        this.color=(color);
    }
    setTextColor(textcolor){
        this.textcolor=(textcolor);
    }
    setText(text){
        this.text=(text);
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
  }

  
  class Square extends Shape {
    constructor(color, textcolor, text, shapetype) {
      super(color, textcolor, text);
      this.shapetype = shapetype;
    }
    setColor(color){
        this.color=(color);
    }
    setTextColor(textcolor){
        this.textcolor=(textcolor);
    }
    setText(text){
        this.text=(text);
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" height="200" width="200" fill="${this.color}"></rect><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
  }

  class Triangle extends Shape {
    constructor(color, textcolor, text, shapetype) {
      super(color, textcolor, text);
      this.shapetype = shapetype;
    }
    setColor(color){
        this.color=(color);
    }
    setTextColor(textcolor){
        this.textcolor=(textcolor);
    }
    setText(text){
        this.text=(text);
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
  }

  module.exports = {Circle, Square, Triangle};
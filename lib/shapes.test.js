// test the shapes with three different colors to ensure they are rendering properly
const {Circle, Square, Triangle} = require('./shapes.js');

describe('Circle', () => {

  describe('Testing Circle Render', () => {
    it('should render the same as the render method', () => {
      const circle = new Circle();
      var color = "red"
      var textcolor = "white"
      var text = "SVG"
      circle.setColor(color)
      circle.setTextColor(textcolor)
      circle.setText(text)
      expect(circle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></circle><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`);
    });
  });

})

describe('Square', () => {
  
    describe('Testing Square Render', () => {
      it('should render the same as the render method', () => {
        const square = new Square();
        var color = "red"
        var textcolor = "white"
        var text = "SVG"
        square.setColor(color)
        square.setTextColor(textcolor)
        square.setText(text)
        expect(square.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect x="50" height="200" width="200" fill="${color}"></rect><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`);
      });
    });
  
  })

  describe('Triangle', () => {
  
    describe('Testing Triangle Render', () => {
      it('should render the same as the render method', () => {
        const triangle = new Triangle();
        var color = "red"
        var textcolor = "white"
        var text = "SVG"
        triangle.setColor(color)
        triangle.setTextColor(textcolor)
        triangle.setText(text)
        expect(triangle.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text></svg>`);
      });
    });
  
  })

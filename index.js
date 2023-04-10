const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

inquirer.prompt([
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for the text:",
    validate: (value) => {
      if (value.length > 3) {
        return "Text must be 3 characters or less.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Enter a color keyword (OR a hexadecimal number) for the text color:",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape from the following options:",
    choices: [
      { name: "Triangle", value: new Triangle() },
      { name: "Circle", value: new Circle() },
      { name: "Square", value: new Square() },
    ],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Enter a color keyword (OR a hexadecimal number) for the shape's color:",
  },
]);

const { Triangle, Circle, Square } = require("./shapes");

describe("Shape classes", () => {
  test("Triangle generates correct SVG", () => {
    const triangle = new Triangle();
    const svg = triangle.getSVG("Hello", "white", "red");
    const expectedSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><polygon fill="red" points="150,25 275,175 25,175" /><text x="50%" y="50%" dy="0.35em" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="3em">Hello</text></svg>';
    expect(svg).toBe(expectedSvg);
  });

  test("Circle generates correct SVG", () => {
    const circle = new Circle();
    const svg = circle.getSVG("Hello", "white", "blue");
    const expectedSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><circle fill="blue" cx="150" cy="100" r="75" /><text x="50%" y="50%" dy="0.35em" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="3em">Hello</text></svg>';
    expect(svg).toBe(expectedSvg);
  });

  test("Square generates correct SVG", () => {
    const square = new Square();
    const svg = square.getSVG("Hello", "white", "green");
    const expectedSvg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect fill="green" x="50" y="50" width="200" height="100" /><text x="50%" y="50%" dy="0.35em" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="3em">Hello</text></svg>';
    expect(svg).toBe(expectedSvg);
  });
});

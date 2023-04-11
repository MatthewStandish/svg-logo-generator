class Shape {
  constructor(tag, attrs) {
    this.tag = tag;
    this.attrs = attrs;
  }

  getSVG(text, textColor, shapeColor) {
    const textAttrs = {
      x: "50%",
      y: "50%",
      dy: "0.35em",
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      fill: textColor,
      "font-size": "3em",
    };

    const shapeAttrs = {
      fill: shapeColor,
      ...this.attrs,
    };

    const shape = `<${this.tag} ${Object.entries(shapeAttrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ")} />`;

    const textElem = `<text ${Object.entries(textAttrs)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ")}>${text}</text>`;

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">${shape}${textElem}</svg>`;
  }
}
class Triangle extends Shape {
  constructor() {
    super("polygon", {
      points: "150,25 275,175 25,175",
    });
  }
}

class Circle extends Shape {
  constructor() {
    super("circle", {
      cx: 150,
      cy: 100,
      r: 75,
    });
  }
}

class Square extends Shape {
  constructor() {
    super("rect", {
      x: 50,
      y: 50,
      width: 200,
      height: 100,
    });
  }
}

module.exports = { Triangle, Circle, Square };

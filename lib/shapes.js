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

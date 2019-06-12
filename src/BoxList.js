import React, { Component } from "react";
import Box from "./Box";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{ width: 10, height: 20, color: "teal" }]
    };
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box width={box.width} height={box.height} color={box.color} />
    ));
    return (
      <div>
        <Box />
        <h1>boxlist</h1>
        {boxes}
      </div>
    );
  }
}

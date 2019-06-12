import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{ width: 10, height: 20, color: "teal" }]
    };
    this.create = this.create.bind(this);
  }
  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    });
  }
  render() {
    const boxes = this.state.boxes.map(box => (
      <Box width={box.width} height={box.height} color={box.color} />
    ));
    return (
      <div>
        <Box />
        <h1>boxlist</h1>
        <NewBoxForm createBox={this.create} />
        {boxes}
      </div>
    );
  }
}

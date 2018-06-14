import React from "react";
import { render } from "react-dom";
import { range } from "d3-array";
import { scaleLinear } from "d3-scale";

// React-Move 2.0
import { easeElastic } from "d3-ease";
import { NodeGroup } from "react-move";

// A scale for changing the color
const linear = scaleLinear().domain([0, window.innerWidth]);

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("touchmove", this.handleTouchMove);
  }

  handleMouseMove({ pageX: x, pageY: y }) {
    this.setState({ x, y });
  }

  handleTouchMove({ touches }) {
    this.handleMouseMove(touches[0]);
  }

  render() {
    return (
      // React-Move!
      <NodeGroup
        data={range(10).map(d => {
          return {
            key: `key-${d}`,
            x: this.state.x,
            y: this.state.y
          };
        })}
        keyAccessor={d => d.key}
        start={data => {
          return { x: data.x, y: data.y };
        }}
        update={(data, index) => {
          return {
            x: [data.x],
            y: [data.y],
            timing: {
              delay: index * 200,
              duration: 1300,
              ease: easeElastic
            }
          };
        }}
      >
        {nodes => {
          // Just a function!
          return (
            <div>
              {nodes.map((node, index) => {
                const { x, y } = node.state;

                return (
                  <div
                    key={node.key}
                    style={{
                      backgroundColor: "red",
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      opacity: 1,
                      WebkitTransform: `translate3d(${x - 25}px, ${y -
                        25}px, 0)`,
                      transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                      zIndex: nodes.length - index
                    }}
                  />
                );
              })}
            </div>
          );
        }}
      </NodeGroup>
    );
  }
}


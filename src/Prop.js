import React, { Component } from 'react';
import './Prop.css';
import logo from './poisson.png'
import bin from './binomial.png'
import geo from './geometric.png'
import hip from './hipergeometric.png'
import uni from './uniform.png'
import norm from './normal.png'
import cent from './central.png'
import { shuffle, range } from 'd3-array';
import { easeBackOut, easeBackInOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

const count = 2;

function getData() {
  return shuffle(range(count).map((d) => ({ value: d })));
}

export default class Example extends Component {
  state = {
    width: null,
    items: getData(),
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }

  updateWidth = () => {
    this.setState(() => ({ width: this.container.offsetWidth || 200 }));
  }

  container = null

  render() {
    const { items, width } = this.state;
    var index = 0
    return (
      <div ref={(d) => { this.container = d; }}>
        
        {width === null ? null : (
          <NodeGroup
            data={items}
            keyAccessor={(d) => d.value}

            start={() => ({
              x: [logo, bin, geo, hip, uni, norm, cent],
              opacity: 0,
            })}

            enter={() => ([
              {
                timing: { delay: 500, duration: 500, ease: easeBackOut },
              },
              {
                opacity: [1],
                timing: { duration: 3000 },
              },
            ])}

          >
            {(nodes) => (
                <div style={{ height: count * 1050, position: 'relative' }}>
                    {nodes.map(({ key, state: { x, y, opacity, color } }) => (
                    <div
                        style={{
                        position: 'absolute',
                        transform: `translate(${width* 0.1}px, ${key}px)`,
                        opacity,
                        color,
                        width: 1600,
                        height: 1600,
                        }}
                    >
                        <img src={x[0]} />
                        <img src={x[1]} />
                        <img src={x[2]} />
                        <img src={x[3]} />
                        <img src={x[4]} />
                        <img src={x[5]} />
                        <img src={x[6]} />
                    </div>
                    ))}
                </div>
                )
            }
          </NodeGroup>
        )}
      </div>
    );
  }
}
export function p() {
    return (
        <div className="Prop">
            <header >
             <img src={logo} />
             <img src={bin} />
             <img src={geo} />
             <img src={hip} />
             <img src={uni} />
             <img src={norm} />
             <img src={cent} />
            </header>
        </div>
      );
}
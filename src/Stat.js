import React, { Component } from 'react';
import './Stat.css';
import tS from './tStud.png'
import iqr from './iqr.png'
import { shuffle, range } from 'd3-array';
import { easeBackOut, easeBackInOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

const count = 1;

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

    return (
      <div ref={(d) => { this.container = d; }}>
        
        {width === null ? null : (
          <NodeGroup
            data={items}
            keyAccessor={(d) => d.value}

            start={() => ({
              x: 0,
              y: 0,
              opacity: 0,
            })}

            enter={() => ([
              {
                x: iqr,
                y: tS,
                timing: { delay: 500, duration: 500, ease: easeBackOut },
              },
              {
                opacity: [1],
                timing: { duration: 3000 },
              },
            ])}

          >
            {(nodes) => (
              <div style={{ height: count * 700, position: 'relative' }}>
                {nodes.map(({ key, state: { x, y, opacity, color } }) => (
                  <div
                    style={{
                      position: 'absolute',
                      transform: `translate(${width* 0.2}px, ${key * 700}px)`,
                      opacity,
                      color,
                    }}
                  >
                    <img src={x}/>
                    <img src={y}/>
                  </div>
                ))}
              </div>
            )}
          </NodeGroup>
        )}
      </div>
    );
  }
}

export function p() {
    return (
        <div className="Stat">
            <header >
                <img src={tS} />
                <img src={iqr} />
            </header>
        </div>
      );
}
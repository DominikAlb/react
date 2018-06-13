import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as pr from './Prop.js';
import * as st from './Stat.js';
import * as cursor from './Cursor.js';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isHiddenProb: true,
      isHiddenStat: true
    }
  }
  toggleHiddenProb() {
    this.setState(
      {
        isHiddenProb : !this.state.isHiddenProb
      }
    )
  }
  toggleHiddenStat() {
    this.setState(
      {
        isHiddenStat : !this.state.isHiddenStat
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Prawdopodobieństwo i Statystyka</h1>
        </header>
        <button onClick={this.toggleHiddenProb.bind(this) }>Probability</button>
        {!this.state.isHiddenProb && <Prop />}
        <button onClick={this.toggleHiddenStat.bind(this)}>Statistic</button>
        {!this.state.isHiddenStat && <Stat />}
        <Curs />
      </div>
      
    );
  }
}
const Prop = () => (
  pr.p()
)
const Curs = () => (
  cursor.cur()
)
const Stat = () => (
  <div className='modal'>
        Hello, World!
    </div>
)
export default App;

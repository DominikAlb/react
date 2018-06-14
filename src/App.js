import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Propability from './Prop.js';
import Hello from './Stat.js';
import Mouse from './Mouse.js'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      isHiddenProb: true,
      isHiddenStat: true,
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
        {!this.state.isHiddenProb && <Propability/>}
        <button onClick={this.toggleHiddenStat.bind(this)}>Statistic</button>
        {!this.state.isHiddenStat && <Hello />}
        <Mouse />
      </div>
    );
  }
}

export default App;

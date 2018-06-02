import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <p><strong>Yes, it's WKORK!!!</strong></p>

          <div className="SemanticUI">
            <p><strong>Semantic UI</strong> </p>
            <div className="ui icon buttons">
              <button className="ui button">
                <i className="play icon"></i>
              </button>
              <button className="ui button">
                <i className="pause icon"></i>
              </button>
              <button className="ui button">
                <i className="shuffle icon"></i>
              </button>
            </div>
          </div>

          

        </p> 
      </div>
    );
  }
}

export default App;

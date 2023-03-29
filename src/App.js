import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import OpenSheetMusicDisplay from './OpenSheetMusicDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { file: "Day VII.xml" };
  }

  handleClick(event) {
    const file = event.target.value;
    this.setState(state => state.file = file);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OpenSheetMusicDisplay in React</h1>
        </header>
        <OpenSheetMusicDisplay file={this.state.file} />
      </div>
    );
  }
}

export default App;

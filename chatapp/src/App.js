import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left-sidebar">Left Sidebar</div>
        <div className="main-content">Main Content</div>
        <div className="right-sidebar">Right Sidebar</div>
      </div>
    );
  }
}

export default App;

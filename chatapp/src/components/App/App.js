import React, { Component } from 'react';
import './App.css';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import MainContent from '../MainContent/MainContent';
import RightSidebar from '../RightSidebar/RightSidebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    );
  }
}

export default App;

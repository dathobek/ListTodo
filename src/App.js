import React, { Component } from 'react';
import './App.css';
import './index.css';
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList/>
       
      </div>
    );
  }
}

export default App;

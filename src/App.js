import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./Components/TodoItem";
import TodoList from "./Components/TodoList";

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

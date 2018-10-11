import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./Components/TodoList";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
       <TodoList/>
       <LoginForm/>
        <img src={logo} alt="React"/>
      </div>
    );
  }
}

export default App;

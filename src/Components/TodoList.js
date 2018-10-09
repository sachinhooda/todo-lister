import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import SavedTodoItem from "./SavedTodoItem";
import FunctionalPalette from "./FunctionalPalette";


class TodoList extends Component {
    state = {
        todoItems : [],
        count: 0
    };

    handleKeyUp = (event) => {
        if(event.keyCode == 13)
            this.setState({
                count: this.state.count + 1,
                todoItems : [...this.state.todoItems, event.target.value]
            });

    };
    handleClearEvent = (event) => {

            this.setState({
                count: 0,
                todoItems : []
            });

    };
    render() {

        const savedTodoItems = [];

        this.state.todoItems.forEach((todoItem) => {
            savedTodoItems.push(<SavedTodoItem text={todoItem} key={todoItem} />);
        });

        return (
            <div className="row justify-content-center">
                <div className="col col-sm">
            <TodoItem keyUp={this.handleKeyUp}/>
            {savedTodoItems}
            Total items saved : {this.state.count}
            <FunctionalPalette clearButtonEvent={this.handleClearEvent}/>
                </div>
                </div>
        )
    }
}

export default TodoList;

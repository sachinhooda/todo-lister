import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import SavedTodoItem from "./SavedTodoItem";
import FunctionalPalette from "./FunctionalPalette";


class TodoList extends Component {
    state = {
        value:"",
        calendarDate:new Date(),
        todoItems : [],
        count: 0
    };

    handleItemAdded = (event) => {
 const todoItemSchema = {
     text:this.state.value,
     description:event.target.elements.todoItemDescription.value,
        priority:event.target.elements.todoItemPriorityDropdown.value,
        date: this.state.calendarDate
 };
 console.log(todoItemSchema);
            this.setState({
                value:"",
                count: this.state.count + 1,
                todoItems : [...this.state.todoItems, todoItemSchema]
            });
            event.preventDefault();

    };
    handleItemValueChanged = (event) => {

        this.setState({
            value: event.target.value
        });

    };

    handleCalendarDateChanged = (event) => {

        this.setState({
            calendarDate: event.target.value
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
            savedTodoItems.push(<SavedTodoItem text={todoItem.text} key={todoItem} />);

        });

        return (
          <>

            <TodoItem calendarDateChanged={this.handleCalendarDateChanged} itemAdded={this.handleItemAdded}  valueChanged={this.handleItemValueChanged} title={this.state.value}/>
            {savedTodoItems}
            Total items saved : {this.state.count}
            <FunctionalPalette clearButtonEvent={this.handleClearEvent}/>

            </>
        )
    }
}

export default TodoList;

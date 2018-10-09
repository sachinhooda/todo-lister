import React, { Component } from 'react';
import TodoItem from "./TodoItem";


class TodoList extends Component {
    state = {
        count:0
    };

    handleKeyUp = (event) => {
        if(event.keyCode == 13)
            this.setState({
                count: this.state.count + 1
            });

    };
    render() {
        return (
            <>
            <TodoItem keyUp={this.handleKeyUp}/>
                <div>
                    {this.state.count}
                </div>
</>
        )
    }
}

export default TodoList;

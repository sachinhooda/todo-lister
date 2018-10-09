import React, { Component } from 'react';


class TodoItem extends Component {
    state = {
        title:"Enter your todo item here"
    };
    handleChange = (event) => {
      this.setState({
    title: event.target.value
});

    };

    render() {
        return (
            <input type="text" name="todoItemText" value={this.state.title} onChange={this.handleChange} onKeyUp={this.props.keyUp} />
        )
    }
}

export default TodoItem;

import React, { Component } from 'react';


class SavedTodoItem extends Component {

    render() {
        return (


            <div className="form-group">
            <input type="text" className="form-control" name="savedTodoItemText" value={this.props.todoItem.text} readOnly={true}/>
                <textarea name ="savedTodoItemDescription" className="form-control" id="todoDescription" value={this.props.todoItem.description} readOnly={true}/>
                <input type="text" className="form-control" name="savedTodoItemPriority" value={this.props.todoItem.priority} readOnly={true}/>
                <input type="text" className="form-control" name="savedTodoItemDate" value={this.props.todoItem.date} readOnly={true}/>
            </div>

        )
    }
}

export default SavedTodoItem;

import React, { Component } from 'react';


class SavedTodoItem extends Component {

    render() {
        return (
            <div className="row">
            <div className="col col-sm-4">
            <div className="form-group">
            <input type="text" className="form-control" name="savedTodoItemText" value={this.props.text} readOnly={true}  />
            </div>
            </div>
            </div>
        )
    }
}

export default SavedTodoItem;

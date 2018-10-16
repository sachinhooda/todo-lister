import React, { Component } from 'react';


class TodoItem extends Component {
    state = {
        placeholder:"Enter text here"
    };

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col col-sm-4">
            <div className="form-group">
            <input type="text" name="todoItemText" className="form-control" value={this.props.title} onChange={this.props.valueChanged} onKeyUp={this.props.keyUp} placeholder={this.state.placeholder} />
            </div>
                </div>
            </div>
        )
    }
}

export default TodoItem;

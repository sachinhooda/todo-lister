import React, { Component } from 'react';


class TodoItem extends Component {
    state = {
        title:"",
        placeholder:"Enter text here"
    };
    handleChange = (event) => {
      this.setState({
    title: event.target.value
});

    };

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col col-sm-4">
            <div className="form-group">
            <input type="text" name="todoItemText" className="form-control" value={this.state.title} onChange={this.handleChange} onKeyUp={this.props.keyUp} placeholder={this.state.placeholder} />
            </div>
                </div>
            </div>
        )
    }
}

export default TodoItem;

import React, { Component } from 'react';


class CustomTextInput extends Component {

    render() {
        return (
            <div className="col-sm-6">
                    <div className="form-group">
                        <input type="text" name="todoItemText" className="form-control" value={this.props.title} onChange={this.props.valueChanged} onKeyUp={this.props.keyUp} placeholder={this.props.placeholder} />
                    </div>
            </div>
        )
    }
}

export default CustomTextInput;

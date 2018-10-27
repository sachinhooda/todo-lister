import React, { Component } from 'react';


class CustomTextInput extends Component {

    render() {
        return (
            <div className="col-sm-6">
                    <div className="form-group">
                        <input type="text" name="todoItemText" className="form-control" value={this.props.title} onChange={this.props.valueChanged} placeholder={this.props.placeholder} ref={this.textInput} />
                    </div>
            </div>
        )
    }
}

export default CustomTextInput;

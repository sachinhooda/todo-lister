import React, { Component } from 'react';


class CustomTextArea extends Component {

    render() {
        return (
            <div className="col-sm-6">
                    <div className="form-group">
                        <textarea name ="todoItemDescription" className="form-control" rows="5" id="todoDescription"></textarea>
                    </div>
            </div>
        )
    }
}

export default CustomTextArea;

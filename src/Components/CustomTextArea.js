import React, { Component } from 'react';


class CustomTextArea extends Component {

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col col-sm-4">
                    <div className="form-group">
                        <textarea className="form-control" rows="5" id="todoDescription"></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomTextArea;

import React, { Component } from 'react';


class CustomSelectDropdown extends Component {

    render() {
        return (
            <div className="col-sm-6">
                <div className="form-group">
                    <select className="form-control" id="priority_category">
                        <option>Highest</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default CustomSelectDropdown;

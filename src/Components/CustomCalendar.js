import React, { Component } from 'react';

import Calendar from 'react-calendar';
class CustomCalendar extends Component {

    render() {
        return (
            <div className="col-sm-6">
                    <div className="form-group">
                    <Calendar name="todoItemCalendar" onChange={this.props.dateChanged} value={this.props.selectedDate} minDate={new Date()}/>

                    </div>
            </div>
        )
    }
}

export default CustomCalendar;

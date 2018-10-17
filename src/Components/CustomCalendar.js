import React, { Component } from 'react';

import Calendar from 'react-calendar';
class CustomCalendar extends Component {

    state ={
        date: new Date()
};
    handleChange=(date)=> {
 this.setState(
     {
         date: date
     }
 )
    };

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col col-sm-4">
                    <div className="form-group">
                    <Calendar onChange={this.handleChange} value={this.state.date}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default CustomCalendar;

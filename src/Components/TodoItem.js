import React, { Component } from 'react';
import CustomTextInput from "./CustomTextInput";
import CustomTextArea from "./CustomTextArea";
import CustomCalendar from "./CustomCalendar";
import CustomSelectDropdown from "./CustomSelectDropdown";

class TodoItem extends Component {

    render() {
        return (

                <div className="form-control-main">

                <form onSubmit={this.props.itemAdded}>
                    <div className="row">
                    <CustomTextInput title={this.props.title} valueChanged={this.props.valueChanged}  placeholder="Enter text here"/>
                        <CustomSelectDropdown/>
                    </div>
                        <div className="row">
                        <CustomTextArea/>
                        <CustomCalendar selectedDate={this.props.selectedDate} dateChanged={this.props.calendarDateChanged}/>
                        </div>

                    <button type="submit" className="btn btn-primary">Add</button>

                </form>

                </div>

        )
    }
}

export default TodoItem;

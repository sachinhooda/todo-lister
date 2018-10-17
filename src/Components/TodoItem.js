import React, { Component } from 'react';
import CustomTextInput from "./CustomTextInput";
import CustomTextArea from "./CustomTextArea";
import CustomCalendar from "./CustomCalendar";

class TodoItem extends Component {

    render() {
        return (
            <>
                <CustomTextInput title={this.props.title} valueChanged={this.props.valueChanged} keyUp={this.props.keyUp} placeholder="Enter text here"/>
                <CustomTextArea/>
                <CustomCalendar/>
           </>
        )
    }
}

export default TodoItem;

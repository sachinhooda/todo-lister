import React, { Component } from 'react';


class PaletteButton extends Component {

    render() {
        return (

        <button type="button" className={ 'btn ' + this.props.buttonTypeClass} onClick={this.props.clearButtonEvent}>{this.props.text}</button>
        )
    }
}

export default PaletteButton;

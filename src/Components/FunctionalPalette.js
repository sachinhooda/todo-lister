import React, { Component } from 'react';
import PaletteButton from "./PaletteButton";


class FunctionalPalette extends Component {

    render() {
        return (
            <div className="row">
                <div className="col col-sm-2">
                       <PaletteButton buttonTypeClass="btn-warning btn-lg" text="clear" clearButtonEvent={this.props.clearButtonEvent}/>
                </div>
            </div>
        )
    }
}

export default FunctionalPalette;

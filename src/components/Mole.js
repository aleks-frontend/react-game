import React from 'react';

class Mole extends React.Component {
    state = {
        bonked: false
    };

    bonk = (e) => {
        if ( this.props.timeUp ) return;
        if ( !e.isTrusted ) return; // checking if it's a real click

        this.setState({ bonked: true });
    }

    bonked = false;

    render() {
    const allowCheck = this.props.allowCheck ? "" : " notAllowed";
    const bonkCheck = this.state.bonked ? " bonked" : "";
    const classText = `mole mole--${this.props.moleIndex} ${allowCheck} ${bonkCheck}`;
    return (
            <div 
                className={classText} 
                data-mole-index={this.props.moleIndex}
                onClick={this.bonk}
            ></div>
        );
    }
}

export default Mole;
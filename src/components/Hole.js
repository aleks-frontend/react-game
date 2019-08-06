import React from 'react';
import Mole from './Mole'

class Hole extends React.Component {
    render() {
        const holeKey = this.props.holeKey;
        const moleObjKeys = Object.keys(this.props.holes[holeKey].moles);
        const moles = this.props.holes[holeKey].moles;
        const activeCheck = (this.props.activeHole == holeKey) ? ` up-${this.props.activeMole}` : '';

        return (
            <div className={`hole hole${this.props.holeIndex} ${activeCheck}`}>
                {moleObjKeys.map(key => 
                        <Mole 
                            moleIndex={moles[key].moleIndex} 
                            allowCheck={moles[key].allowed} 
                            key={key} 
                            timeUp={this.props.timeUp} 
                        />)}
            </div>
        );
    }
}

export default Hole;
import React from 'react';

class Popup extends React.Component {
    nameInput = React.createRef();
    submitInput = React.createRef();

    startGame = (event) => {
        event.preventDefault();
        this.props.history.push('/level/level1');
    }

    render() {
        return (
            <div className="popup__overlay">
                <form className="popup" onSubmit={this.startGame}>
                    <div className="inputs">
                        <label>Your name: </label>
                        <input 
                            type="text" 
                            className="playerName" 
                            placeholder="Your name here.." 
                            ref={this.nameInput}
                        />
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            className="submitBtn" 
                            value="Start" 
                            ref={this.submitInput}
                        />
                    </div>
                </form>
                <div className="endMessage"></div>
                <div className="table"></div>
            </div>
        );
    }
}

export default Popup;
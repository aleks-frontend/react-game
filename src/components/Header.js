import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>Whack-a-mole! <span className="score">0</span></h1>
                <h2>Time left: <span className="timeLeft"></span></h2>
            </div>
        );
    }
}

export default Header;
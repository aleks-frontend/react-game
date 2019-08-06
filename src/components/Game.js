import React from 'react';
import Header from './Header';
import MuteBtn from './MuteBtn';
import Hole from './Hole';
import { randomHole } from '../helpers'
import { randomMole } from '../helpers'
import { randomTime } from '../helpers'

class Game extends React.Component {
    state = {
        levels: {
            level1: {
                holes: {
                    hole1: {
                        holeIndex: 1,
                        moles: {
                            mole1: {
                                moleIndex: 1,
                                moleClass: 'mole--1',
                                allowed: true
                            },
                            mole2: {
                                moleIndex: 2,
                                moleClass: 'mole--2',
                                allowed: true
                            },
                            mole3: {
                                moleIndex: 3,
                                moleClass: 'mole--3',
                                allowed: true
                            },
                            mole4: {
                                moleIndex: 4,
                                moleClass: 'mole--4',
                                allowed: false
                            }
                        }
                    },
                    hole2: {
                        holeIndex: 2,
                        moles: {
                            mole1: {
                                moleIndex: 1,
                                moleClass: 'mole--1',
                                allowed: true
                            },
                            mole2: {
                                moleIndex: 2,
                                moleClass: 'mole--2',
                                allowed: true
                            },
                            mole3: {
                                moleIndex: 3,
                                moleClass: 'mole--3',
                                allowed: true
                            },
                            mole4: {
                                moleIndex: 4,
                                moleClass: 'mole--4',
                                allowed: false
                            }
                        }
                    },
                    hole3: {
                        holeIndex: 3,
                        moles: {
                            mole1: {
                                moleIndex: 1,
                                moleClass: 'mole--1',
                                allowed: true
                            },
                            mole2: {
                                moleIndex: 2,
                                moleClass: 'mole--2',
                                allowed: true
                            },
                            mole3: {
                                moleIndex: 3,
                                moleClass: 'mole--3',
                                allowed: true
                            },
                            mole4: {
                                moleIndex: 4,
                                moleClass: 'mole--4',
                                allowed: false
                            }
                        }
                    },
                    hole4: {
                        holeIndex: 4,
                        moles: {
                            mole1: {
                                moleIndex: 1,
                                moleClass: 'mole--1',
                                allowed: true
                            },
                            mole2: {
                                moleIndex: 2,
                                moleClass: 'mole--2',
                                allowed: true
                            },
                            mole3: {
                                moleIndex: 3,
                                moleClass: 'mole--3',
                                allowed: true
                            },
                            mole4: {
                                moleIndex: 4,
                                moleClass: 'mole--4',
                                allowed: false
                            }
                        }
                    },
                    hole5: {
                        holeIndex: 5,
                        moles: {
                            mole1: {
                                moleIndex: 1,
                                moleClass: 'mole--1',
                                allowed: true
                            },
                            mole2: {
                                moleIndex: 2,
                                moleClass: 'mole--2',
                                allowed: true
                            },
                            mole3: {
                                moleIndex: 3,
                                moleClass: 'mole--3',
                                allowed: true
                            },
                            mole4: {
                                moleIndex: 4,
                                moleClass: 'mole--4',
                                allowed: false
                            }
                        }
                    },
                    hole6: {
                        holeIndex: 6,
                        moles: {
                            mole1: {
                                moleIndex: 1,
                                moleClass: 'mole--1',
                                allowed: true
                            },
                            mole2: {
                                moleIndex: 2,
                                moleClass: 'mole--2',
                                allowed: true
                            },
                            mole3: {
                                moleIndex: 3,
                                moleClass: 'mole--3',
                                allowed: true
                            },
                            mole4: {
                                moleIndex: 4,
                                moleClass: 'mole--4',
                                allowed: false
                            }
                        }
                    }
                }
            }
        },
        activeHole: '',
        activeMole: '',
    };

    levelId = this.props.match.params.levelId;
    activeLevel = this.state.levels[this.levelId] || this.state.levels['level1'];
    holes = this.activeLevel.holes;
    holeKeys = Object.keys(this.holes);
    timeUp = false;

    peep = () => {
        const activeHole = randomHole(this.holeKeys);
        const moleKeys = Object.keys(this.activeLevel.holes[activeHole].moles)
        const moleInfo = randomMole(moleKeys);

        this.setState({activeHole: activeHole});
        this.setState({activeMole: moleInfo.index});

        const peepTimeout = setTimeout(() => {
            if ( !this.timeUp ) {
                this.peep();
            }
        }, 800);

    }

    componentDidMount() {
        this.peep();
        setTimeout(() => {
            this.timeUp = true;
        }, 10000);
    }

    render() {
        return (
            <React.Fragment>
                <MuteBtn />
                <Header />

                <div className="game">
                    {this.holeKeys.map(
                        (key) => <Hole 
                                    holeIndex={this.holes[key].holeIndex} 
                                    key={key} 
                                    holeKey={key} 
                                    holes={this.holes} 
                                    timeUp={this.timeUp}
                                    activeHole={this.state.activeHole}
                                    activeMole={this.state.activeMole}
                                 />
                    )}
                </div>

                <img src="images/bonus-mole.png" className="bonusMole" alt="Bonus Mole" />
            </React.Fragment>
        );
    }
}

export default Game;
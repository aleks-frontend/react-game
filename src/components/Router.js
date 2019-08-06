import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Popup from './Popup';
import Game from './Game';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Popup} />
            <Route path="/level/:levelId" component={Game} />
            <Route component={Popup} />
        </Switch>
    </BrowserRouter>
);

export default Router;
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import Login from '../pages/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <HomePage />}/>
            <Route exact path="/login" component={() => <Login /> }/>
            <Route exact path="/logout" component={() => <h1>Faça Login Aqui</h1>}/>
            <Route exact path="/forget-password" component={() => <h1>Faça Login Aqui</h1>}/>
            <Route exact path="/register" component={() => <h1>Registre-se Aqui</h1>}/>
            <Route exact path="/confirm" component={() => <h1>Registre-se Aqui</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import Logout from '../pages/logout';
import Confirm from '../pages/confirm';
import ForgotPassword from '../pages/forgotPassword';
import Dashboard from '../pages/dashboard';
import Page404 from '../pages/page404';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <HomePage />}/>
            <Route exact path="/login" component={() => <Login /> }/>
            <Route exact path="/logout" component={() => <Logout />}/>
            <Route exact path="/forgot-password" component={() => <ForgotPassword />}/>
            <Route exact path="/register" component={() => <Register />}/>
            <Route exact path="/confirm" component={() => <Confirm />}/>

            {/* Future Private Route */}
            <Route exact path="/dashboard" component={() => <Dashboard />}/>

            <Route component={() => <Page404 />}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;

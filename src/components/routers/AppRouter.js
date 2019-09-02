// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { TestPageOne } from '../pages/TestPageOne';
import { TestPageTwo } from '../pages/TestPageTwo';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />            
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/testone' component={TestPageOne}/>
                <Route exact path='/testtwo' component={TestPageTwo} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);
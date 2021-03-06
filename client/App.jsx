import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import Genres from './components/Genres';
import Layout from './components/Layout';
import RoutesContainer from './containers/RoutesContainer';
import Profile from './components/Profile';

import './Styles/App.css';

const App = () => (
    <Layout>
        <Switch>
            <Route path='/' exact render={ () => <Redirect to='Home'/> }/>
            <Route path='/Genres/:type' component={ Genres } exact/>
            <Route path='/Home' component={ Home }/>
            <Route path='/Contacts' component={ Contacts }/>
            <Route path='/Login' component={ Login }/>
            <Route path='/Signup' component={ Signup } />
            <Route path='/Profile' component={ Profile }/>
            <RoutesContainer />
            <Route component={ NotFound } />
        </Switch>
    </Layout >
);

export default App;

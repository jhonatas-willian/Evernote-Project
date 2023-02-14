import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './screens/home';
import LoginScreen from './screens/auth/login';
import RegisterScreen from "./screens/auth/register";
import NotesScreen from './screens/notes/index';
import UsersEditScreen from './screens/users/edit';

function AppRoutes() {
    return (
    <Router>
        <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route exact path='/login' component={LoginScreen}/>
            <Route exact path='/register' component={RegisterScreen}/>
            <Route exact path='/notes' component={NotesScreen}/>
            <Route exact path='/users/edit' component={UsersEditScreen}/>
        </Switch>
    </Router>
)};


export default AppRoutes;
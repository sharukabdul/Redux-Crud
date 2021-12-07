import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import UserList from './UserList';
import '../css/Style.css';
import View from './View';

const Home = () => {

    return (
        <center>
            <BrowserRouter>
                <Switch>
                    <Route exact path= '/' component= {UserList} />
                    <Route path= '/create' component= {CreateUser} />
                    <Route path= '/edit/:id' render= {(props) => <EditUser {...props} />} />
                    <Route path= '/view/:id' component= {View} />
                </Switch>
            </BrowserRouter>
        </center>
    );
}

export default Home;

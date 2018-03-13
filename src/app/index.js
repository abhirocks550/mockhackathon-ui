import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/App';
import AddCourse from './container/AddCourse';
import NewUser from './container/NewUser';
import Login from './container/Login';
import HomePage from './container/HomePage';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={HomePage} />
                <Route path="/addCourse" component={AddCourse}/>
                <Route path="/login" component={Login }/>
                <Route path="/newUser" component={NewUser}/>
                <Route path="/existingCourse" component={AddCourse}/>
            </Route>
        </Router>
    </Provider>, 
    window.document.getElementById('app')
    );

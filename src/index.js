import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    Route,
    Link,
    NavLink,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';

const routing = (
    <Router>
        <div className="container">
            <div>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li  className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/users">
                            Users
                        </NavLink>
                    </li>
                    <li  className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>

            <ul>


            </ul>
            <hr/>
            <div className="content">
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/contact" component={Contact}/>
                    <Route component={Notfound}/>
                </Switch>
            </div>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
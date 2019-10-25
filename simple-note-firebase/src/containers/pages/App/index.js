import React, {Fragment} from 'react';
// import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import { Provider } from 'react-redux';
import {storeNew} from '../../../config/redux';

function App() {
  return (
    <Provider store={storeNew}>
      <Router>
        <Fragment>
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
              <li>
              <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            
          </Switch>

        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

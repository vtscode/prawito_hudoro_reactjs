import React, {Fragment} from 'react';
// import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/index';
import Login from '../Login/index';
import Register from '../Register/index';


function App() {
  return (
    <Router>
      <Fragment>
         {/*<nav>
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
         </nav>*/}
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          
        </Switch>

      </Fragment>
    </Router>
  );
}

export default App;

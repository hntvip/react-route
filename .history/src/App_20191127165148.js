import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div className="App">
        <div class="container">
          <div class="col-row">
           <nav className="navbar navbar-inverse">
          <a  className="navbar-brand">Title</a>
          <ul className="nav navbar-nav">
              <NavLink 
                exact
                to="/"
                activeStyle={{
                  backgroundColor: 'white',
                  color: 'red'
                }}  
                activeClassName="active"
               >Trang Chu
              </NavLink>

              <NavLink 
                exact
                to="/contact"
                activeStyle={{
                  backgroundColor: 'white',
                  color: 'red'
                }}  
                activeClassName="active"> Contact Page
              </NavLink>

              <NavLink 
                exact
                to="/about"
                activeStyle={{
                  backgroundColor: 'white',
                  color: 'red'
                }}  
                activeClassName="active"> About
              </NavLink>
          </ul>
        </nav>
           </div>
        </div>
        {/* Noi Dung */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-inverse">
          <a  className="navbar-brand">Title</a>
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/">Trang Chu</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Page</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        {/* Noi Dung */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={About}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;

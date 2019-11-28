import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-inverse">
          <a  className="navbar-brand">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Trang Chu</Link>
            </li>
            <li className="active">
              <Link to="/">Contact Page</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {/* Noi Dung */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;

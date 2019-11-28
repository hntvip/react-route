import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Trang Chu</a>
            </li>
            <li>
              <a>Lien He</a>
            </li>
          </ul>
        </nav>
        {/* Noi Dung */}
        <Route path="/" exac component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;

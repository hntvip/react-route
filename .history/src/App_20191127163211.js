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
          <a  className="navbar-brand">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/">Trang Chu</a>
              <Link to="/"></Link>
            </li>
            <li>
              <a href="/about">Lien He</a>
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

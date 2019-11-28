import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
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
      
    </div>
  );
}

export default App;

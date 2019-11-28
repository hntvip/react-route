import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={()=>{
      {label}
    }} >

    </Route>
  )
}
function App() {
  return (
    <Router>
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <a class="navbar-brand" href="#">Title</a>
        <ul class="nav navbar-nav">
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
      {/* Noi Dung */}
      <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
      
    </Router>
  );
}

export default App;

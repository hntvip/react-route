import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
      var active = match ? 'active': 'abc'
      return (
        <li className={active}>
          <Link to={to} className="my-link">{label}</Link>
        </li>
      )
    }}>

    </Route>
  )
}

function Menu() extends Component{
  return (
    <Router>
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <a class="navbar-brand">Title</a>
        <ul class="nav navbar-nav">
          <MenuLink to="/" label="Trang Chu" activeOnlyWhenExact="true"/>
          <MenuLink to="/about" label="About" activeOnlyWhenExact="false"/>
          <MenuLink to="/contact" label="Contact" activeOnlyWhenExact="false"/>
        </ul>
      </nav>
    </Router>
  );
}

export default Menu;

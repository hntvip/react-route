import React, { Component } from 'react';
import './App.css';
import { Route, Link} from 'react-router-dom';

const menus = [
  {
    name: 'Trang Chu',
    to:'/',
    exact: true
  },{
    name: 'About Page',
    to:'/about',
    exact: false
  },{
    name: 'Contact Page',
    to:'/contact',
    exact: false
  }
]
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

class Menu extends Component{
  reder(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <ul className="nav navbar-nav">
          { this.showMenu(menus) }
        </ul>
      </nav>
    );
  }

  showMenu = (menu) => {
    var result = null;
    if ( menu.length > 0){
      result = menu.map( (menu, index) => {
        <MenuLink to="/" label="Trang Chu" activeOnlyWhenExact="true"/>
      })
    }
    return result;
  }
}

export default Menu;

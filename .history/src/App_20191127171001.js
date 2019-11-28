import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={(match)=>{
      var active = match ? 'active': 'abc'
      return (
        <li className={active}>
          <Link to={to} className="my-link"> {label}</Link>
        </li>
      )
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
          <MenuLink to="/" label="Trang Chu" activeOnlyWhenExact="true"/>
          <MenuLink to="/about" label="About page"/>
          <MenuLink to="/contact" label="Contact page"/>
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

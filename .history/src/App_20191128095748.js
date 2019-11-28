import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Menu } from './components/Menu';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
      var active = match ? 'active': 'abc'
      return (
        <li className={active}>
          <Link to={to} className="my-link">{label}</Link>
        </li>
      )
    }} >

    </Route>
  )
}
function App() {
  return (
    <Router>
      <div class="App">
        <Menu/>
      
      {/* Noi Dung */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

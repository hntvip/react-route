import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Menu from './components/Menu';
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
    }}>
    </Route>
  )
}
class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Menu/>
          <MenuLink to="/home"
            label='home' 
            activeOnlyWhenExact='true'
          />
          {/* Noi Dung */}
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

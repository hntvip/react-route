import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Route from'./routes';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Menu/>
          {/* Noi Dung */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
        </div>
      </Router>
    )
  }
}

export default App;

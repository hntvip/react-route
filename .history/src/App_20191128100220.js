import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

class App extends Component {
  render(){
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
    )
  }
}

export default App;

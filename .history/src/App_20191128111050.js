import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import routes from'./routes';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Menu/>
          {/* Noi Dung */}
            <Route path="/" exact component={Home}></Route>
            {this.showContentMenus(routes)}
        </div>
      </Router>
    )
  }
  showContentMenus = (routes) => {
    var result = null;

    return result;

  }
}

export default App;

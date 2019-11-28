import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
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
    if( routes.length > 0){
      result = routes.map( (route, index) => {
        return (
          <Route 
            key={index}
            path={route.path} 
            onlyExactWhenActive={route.exact} 
            component={route.main}
          ></Route>
        )
      })
    }
    return result;

  }
}

export default App;

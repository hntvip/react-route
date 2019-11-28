import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';
import routes from'./routes';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Menu/>
          {/* Noi Dung */}
          <Switch>
          <Route 
            path="/about" 
            exact="false"
            component={<About/>}
          ></Route>
          </Switch>
          {/* {this.showContentMenus(routes)} */}
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
            exact={route.exact} 
            component={route.main}
          ></Route>
        )
      })
    }
    return result;

  }
}

export default App;

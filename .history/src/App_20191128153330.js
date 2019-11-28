import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import routes from'./routes';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Menu/>
          {/* Noi Dung */}
          <Switch>
            {/* {this.showContentMenus(routes)} */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/:user">
              <User />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
  showContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0){
      result = routes.map((route, index) => {
        console.log(route)
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

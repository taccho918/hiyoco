//modules
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//my modules
import Dashboard from './Dashboard';
import PageOfFilter from './PageOfFilter';
import PageOfAction from './PageOfAction';
import MyNavbar from './MyNavbar';
import Action from './Action';
import Filter from './Filter';
//css
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <MyNavbar/>
          <Route exact path="/" component={Dashboard}/>
        <Switch>
          <Route path="/action/:id" component={Action}/>
          <Route path="/action" component={PageOfAction}/>
        </Switch>
        <Switch>
          <Route path="/filter/:id" component={Filter}/>
          <Route path="/filter" component={PageOfFilter}/>
        </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;

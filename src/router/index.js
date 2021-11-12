import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./../containers/Home/";
import Results from "./../containers/Results/";
import Error404 from "./../containers/404/";


class AppRouter extends Component {

    render() {
        return (
        <Router>
        <div>
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results}/>
            <Route component={Error404} />
            </Switch>
        </div>
        </Router>
        );
    }
}
  
export default AppRouter;
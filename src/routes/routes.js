import React from "react";
import {Route,Switch,BrowserRouter as Router} from "react-router-dom";

//components
import App from "../components/App";
//pages
import Home from "../pages/Home";

const AppRoutes = ()=>{
    return(
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                </Switch>
            </App>
        </Router>
    );
};

export default AppRoutes;
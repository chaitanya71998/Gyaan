import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {observer,Provider} from 'mobx-react';

import "./App.css";
import stores from './Common/stores';
import HomePage from "./Common/components/HomePage";
import { paths } from "./Common/constants/NavigationConstants";
import { SignInRoute } from "./Authentication/routes/SignInRoute";
import { DashboardRoute } from "./Dashboard/routes/DashboardRoute";
import  DomainRoute  from "./Dashboard/routes/DomainRoute";

import { FollowingDomains } from "./Dashboard/components/FollowingDomains";


const {signInForm,dashboard} = paths


@observer   
class App extends React.Component{ 
  render(){
    
  return (
    <Provider {...stores}>
    <BrowserRouter>
       <Switch>
          <Route exact path={signInForm}>
            <SignInRoute/>
          </Route>
          <Route exact path ="Domain/:id">
            <DomainRoute/>
          </Route>
          <Route exact path={dashboard}>
            <DashboardRoute/>
          </Route>
          
          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
    </BrowserRouter>
    </Provider>
  );
  
}
}
export  default App;
        
/*
<Route exact path = "followingDomains/:id">
            <DomainRoute/>
          </Route>
*/
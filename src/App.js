import React from "react";
import { HashRouter , Switch, Route } from "react-router-dom";
import {observer,Provider} from 'mobx-react';

import "./App.css";
import stores from './stores/index';
import { SignInRoute } from "./authentication/routes/SignInRoute";
import HomePage from "./components/HomePage";
import { paths } from "./constants/paths";
import { DashboardRoute } from "./Dashboard/routes/DashboardRoute";


const {signInForm,dashboard} = paths


@observer   
class App extends React.Component{ 
  render(){
    
  return (
    <Provider {...stores}>
    <HashRouter>
       <Switch>
          <Route path={signInForm}>
            <SignInRoute/>
          </Route>
          <Route path={dashboard}>
            <DashboardRoute/>
          </Route>
          
          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
    </HashRouter>
    </Provider>
  );
  
}
}
export  default App;
        

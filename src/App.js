/*eslint-disable*/
import React, { Component, useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import Store from "./pages/Store";
import ContestBoard from "./pages/ContestBoard";
import Review from "./pages/Review";
import Sign from "./pages/Sign";
import { Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";


function App() {
    return(
          
      <Switch>
        <Route path='/' component={Main} exact={true} />
        <Route path='/store' component={Store} />
        <Route path='/ContestBoard' component={ContestBoard} />
        <Route path='/Review' component={Review} />
        <Route path='/sign' component={Sign} />
        <Route path='/login' component={Login} />
      </Switch>


    )
}


export default App;

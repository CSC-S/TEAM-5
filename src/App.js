/*eslint-disable*/
import React, { Component, useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import Store from "./pages/Store";
import ContestBoard from "./pages/ContestBoard";
import Review from "./pages/Review";
import Sign from "./pages/Sign";
import { Route, Switch } from 'react-router-dom';


function App() {
    return(
          
      <Switch>
        <Route path='/' component={Main} exact={true} />
        <Route path='/store' component={Store} />
        <Route path='/ContestBoard' component={ContestBoard} />
        <Route path='/Review' component={Review} />
        <Route path='/sign' component={Sign} />
      </Switch>


    )
}


export default App;

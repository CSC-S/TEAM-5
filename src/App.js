/*eslint-disable*/
import React, { Component, useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import Store from "./pages/Store";
import ContestBoard from "./pages/ContestBoard";
import Review from "./pages/Review";
import Sign from "./pages/Sign";
<<<<<<< HEAD
import { Route, Switch } from 'react-router-dom';
=======
import Login from "./pages/Login";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
>>>>>>> f2cc67981a3496b367f7219e05750df1c9c6517a


function App() {
    return(
          
      <Switch>
        <Route path='/' component={Main} exact={true} />
        <Route path='/store' component={Store} />
        <Route path='/ContestBoard' component={ContestBoard} />
        <Route path='/Review' component={Review} />
        <Route path='/sign' component={Sign} />
<<<<<<< HEAD
=======
        <Route path='/login' component={Login} />
>>>>>>> f2cc67981a3496b367f7219e05750df1c9c6517a
      </Switch>


    )
}


export default App;

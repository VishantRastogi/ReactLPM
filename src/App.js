/**
 * @author Vishant Rastogi
 * @email vishant777@gmail.com
 * @create date 2021-04-27 14:16:39
 * @modify date 2021-04-27 14:16:39
 */

import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

const Home = lazy(() => import("./components/Home/Home"));
const Signup = lazy(() => import("./components/SignUp/SignUp"));
const Login = lazy(() => import("./components/Login/Login"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

const HomeNavigatorSC = styled.div``;

const App = () => {
  return (
    <HomeNavigatorSC>
      <Router>
      <Suspense fallback={<div className="loader" />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
      </Router>
    </HomeNavigatorSC>
  );
}

export default App;
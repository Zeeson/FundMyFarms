import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./shared/home/Home";
import Error404 from "./shared/error404/Error404";
import FundeeRegister from "./lendee/screens/FundeeRegister";
import FunderRegister from "./lender/screens/FunderRegister";

import FundeeLogin from "./lendee/screens/FundeeLogin";
// import FunderLogin from "./lender/screens/FunderLogin"

import LenderDashboard from "./lender/screens/Dashboard";
import LendeeDashboard from "./lendee/screens/Dashboard";

import JoinUs from "./shared/JoinUs/JoinUsPage";
import Login from "./shared/Login/LoginPage";

import UserLogin from "./shared/userlogin/Login";
import UserRegister from "./shared/userRegister/Register";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={JoinUs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/lendee/register" component={FundeeRegister} />
        <Route exact path="/lender/register" component={FunderRegister} />
        <Route exact path="/lendee/login" component={FundeeLogin} />
        {/* <Route exact path="/lender/login" component={FunderLogin} /> */}
        <Route path="/lender" component={LenderDashboard} />
        <Route path="/lendee" component={LendeeDashboard} />

        {/* <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />  */}
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/userregister" component={UserRegister} />

        {/* Private Route available to only authenticated User */}
        {/* <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/new-resume" component={New_resume} />
        <PrivateRoute path="/template-a" component={TemplateA} /> */}

        {/* Error 404 - Page Not Found */}
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

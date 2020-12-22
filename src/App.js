import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./shared/home/Home";
import Dashboard from "./lender/screens/Dashboard";
import Error404 from "./shared/error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lender" component={Dashboard} />
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} /> */}

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

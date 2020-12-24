import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import SideNav from "../components/SideNav";
import Overview from "./Overview";
import LendingMarket from "./LendingMarket";
import Investments from "./Investments";
import Settings from "./Settings";
import ViewCampaign from "./ViewCampaign";

import "./Dashboard.css";

function Dashboard() {
  const { url } = useRouteMatch();
  return (
    <div id="dashboard">
      <div className="dashboard-container row">
        <SideNav name="Umar Farouq" />
        <div className="col-sm-10 main-content px-0">
          <Switch>
            <Route path={`${url}/overview`} component={Overview} />
            <Route
              path={`${url}/lending-market`}
              component={LendingMarket}
              exact
            />
            <Route path={`${url}/settings`} component={Settings} exact />
            <Route path={`${url}/view-campaign/:id`} component={ViewCampaign} />
            <Route path={`${url}/investments`} component={Investments} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

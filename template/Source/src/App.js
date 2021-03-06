import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import SignIn from "./components/auth/SignIn"
import BotamList from "./views/BotamList"
import PrivateRoute from "./privateRoute"
import { DefaultLayout } from "./layouts";


export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <PrivateRoute path='/botam-list' component={BotamList}/>

      </Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);

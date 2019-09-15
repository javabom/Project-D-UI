import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

import { ContextProvider } from "./contexts";

import SigninPage from "./components/pages/signin-page/signin-page";

const App = () => (
  <Router>
    <ContextProvider>
      <Fragment>
        <CssBaseline />
        <Switch>
          <Route path="/signin" component={SigninPage} />
          <Route component={() => <div>default page</div>} />
        </Switch>
      </Fragment>
    </ContextProvider>
  </Router>
);

export default App;

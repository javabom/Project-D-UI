import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import "typeface-roboto";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Fragment>
    <CssBaseline />
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

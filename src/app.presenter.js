import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import "typeface-roboto";

const App = () => (
  <Router>
    <Fragment>
      <CssBaseline />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Fragment>
  </Router>
);

export default App;

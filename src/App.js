import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Gallery from "./Gallery";
import Product from "./Product";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Gallery} />
      <Route path="/product/:id" component={Product} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById("root"));

export default App;

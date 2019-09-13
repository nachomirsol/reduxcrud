import React, { Component } from "react";
import { Routes } from "./routes/Routes";

import { BrowserRouter as Router } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const routes = Routes();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router children={routes} />
      </Provider>
    );
  }
}

export default App;

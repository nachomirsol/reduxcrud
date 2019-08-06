import React, { Component } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import EditProduct from "./components/EditProduct";
import NewProduct from "./components/NewProduct";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path={"/"} component={Products} />
                <Route path={"/products/new"} component={NewProduct} />
                <Route path={"/products/edit/:id"} component={EditProduct} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;

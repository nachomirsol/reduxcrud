import React from "react";

import { URL } from "../utils/const";
import Home from "../containers/Home/Home";
import NewProduct from "../containers/NewProduct/NewProduct";
import EditProduct from "../containers/EditProduct/EditProduct";

import { Route, Switch } from "react-router-dom";

export const Routes = () => (
  <Switch>
    <Route exact path={"/"} component={Home} />
    <Route path={URL.newProduct} component={NewProduct} />
    <Route path={URL.editProduct} component={EditProduct} />
  </Switch>
);

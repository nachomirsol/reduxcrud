import React, { Component } from "react";

import { connect } from "react-redux";
import { showProducts } from "../actions/productActions";

class Products extends Component {
  render() {
    return <h1>Products</h1>;
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { showProducts }
)(Products);

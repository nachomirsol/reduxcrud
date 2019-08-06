import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { showProducts } from "../actions/productActions";

class Products extends Component {
  componentDidMount() {
    this.props.showProducts();
  }

  render() {
    const { products } = this.props;

    console.log(products);
    return (
      <React.Fragment>
        <h2 className="text-center my-5"> Product List</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              {products.map(product => (
                <Product key={product.id} info={product} />
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// You will find state values in reduces
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { showProducts }
)(Products);

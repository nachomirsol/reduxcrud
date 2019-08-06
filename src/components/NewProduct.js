import React, { Component } from "react";

import { connect } from "react-redux";
import { addProduct } from "../actions/productActions";

class NewProduct extends Component {
  state = {
    name: "",
    price: "",
    error: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addProduct = e => {
    e.preventDefault();
    const { name, price } = this.state;
    if (name === "" || price === "") {
      this.setState({ error: true });
      return;
    }
    this.setState({ error: false });

    const productInfo = {
      name: this.state.name,
      price: this.state.price
    };
    this.props.addProduct(productInfo);
    this.props.history.push("/");
  };

  render() {
    const { error } = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Add Product</h2>
              <form onSubmit={this.addProduct}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label>Product price</label>
                  <input
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    name="price"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Add
                </button>
              </form>
              {error ? (
                <div className="font-weight-bold alert alert-danger text-center mt-4">
                  Todos los campos son obligatorios
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addProduct }
)(NewProduct);

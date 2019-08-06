import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProduct } from "../actions/productActions";

class Product extends Component {
  deleteProduct = () => {
    const { id } = this.props.info;
    this.props.deleteProduct(id);
  };

  render() {
    const { id, name, price } = this.props.info;
    return (
      <li className="list-group-item">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 d-flex justify-content-between align-items-center">
            <p className="m-0">{name}</p>
            <span className="badge badge-warning">{price} €</span>
          </div>
          <div className="col-md-4 d-flex justify-content-end actions">
            <Link to={`products/edit/${id}`} className="btn btn-primary">
              Edit Product
            </Link>
            <button
              onClick={id => this.deleteProduct(this.props.info.id)}
              type="button"
              className="btn btn-danger mr-2"
            >
              Remove
            </button>
          </div>
        </div>
      </li>
    );
  }
}
// As we are not adding anything to the state, we dont need mapstatetoprops
export default connect(
  null,
  { deleteProduct }
)(Product);

import React, { Component } from "react";
import { connect } from "react-redux";
import { showProduct, editProduct } from "../../actions/products";

class EditProduct extends Component {
  state = {
    name: "",
    price: "",
    error: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showProduct(id);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { name, price } = nextProps.product;
    this.setState({
      name,
      price
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  editProduct = e => {
    e.preventDefault();
    const { name, price } = this.state;
    if (name === "" || price === "") {
      this.setState({ error: true });
      return;
    }

    this.setState({ error: false });

    // Get id from product
    const { id } = this.props.match.params;

    const productInfo = {
      id,
      name,
      price
    };
    this.props.editProduct(productInfo);
    this.props.history.push("/");
  };

  render() {
    const { error, name, price } = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Add Product</h2>
              <form onSubmit={this.editProduct}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    name="name"
                    defaultValue={name}
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
                    defaultValue={price}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >
                  Save Changes
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
const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(
  mapStateToProps,
  { showProduct, editProduct }
)(EditProduct);

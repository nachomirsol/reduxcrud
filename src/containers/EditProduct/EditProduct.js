import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { showProduct, editProduct } from "../../actions/products";

const EditProduct = ({ product, showProduct, editProduct, history, match }) => {

  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {

    showProduct(match.params.id);

  }, [showProduct, match.params.id, product])

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }


  const onSubmit = e => {
    e.preventDefault();
    editItem();
  };

  const editItem = () => {

    const { name, price } = formData;
    if (name === "" || price === "") {
      setError(true);
      return;
    }

    setError(false);

    // Get id from product
    formData.id = match.params.id
    console.log(formData)

    editProduct(formData);
    history.push("/");
  };

  return (

    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Edit Product</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <label>Title</label>
                <input
                  onChange={e => onChange(e)}
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  name="name"
                  defaultValue={product ? product.name : ''}
                />
              </div>
              <div className="form-group">
                <label>Product price</label>
                <input
                  onChange={e => onChange(e)}
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  name="price"
                  defaultValue={product ? product.price : ''}
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
  )
}

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(
  mapStateToProps,
  { showProduct, editProduct }
)(EditProduct);

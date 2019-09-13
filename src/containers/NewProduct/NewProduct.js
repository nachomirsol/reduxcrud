import React, { useState } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../actions/products";

const NewProduct = ({ addProduct, history }) => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({});

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const addItem = () => {
    if (formData.name === "" || formData.price === "") {
      setError(true);
      return;
    }

    setError(false);
    console.log(formData);

    addProduct(formData);
    history.push("/");
  };

  const onSubmit = e => {
    e.preventDefault();
    addItem();
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Add Product</h2>
            <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <label>Title</label>
                <input
                  onChange={e => onChange(e)}
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  name="name"
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
};

export default connect(
  null,
  { addProduct }
)(NewProduct);

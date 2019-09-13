import React, { useEffect } from "react";
import Product from "../../components/Product/Product";
import { connect } from "react-redux";
import { showProducts, deleteProduct } from "../../actions/products";
import Header from "../../components/Header/Header";

const Products = ({ showProducts, deleteProduct, products }) => {
  useEffect(() => {
    showProducts();
  }, [showProducts]);

  return (
    <React.Fragment>
      <Header />
      <h2 className="text-center my-5"> Product List</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul>
            {products.map(product => (
              <Product
                key={product.id}
                info={product}
                deleteItem={() => deleteProduct(product.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

// You will find state values in reduces
const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { showProducts, deleteProduct }
)(Products);

import { DataSource } from "./dataSource";
import axios from "axios";
const baseUrl = "http://localhost:5000/products";

const showProductsService = async () => {
  return await axios.get(`${baseUrl}`).then(res => res.data.data);
};

const showProductService = id => {
  return DataSource({
    url: `/products/${id}`,
    method: "GET"
  });
};

const deleteProductService = id => {
  return DataSource({
    url: `/products/${id}`,
    method: "DELETE"
  });
};

const addProductService = data => {
  return DataSource({
    url: `/products`,
    method: "POST",
    data
  });
};

const editProductService = data => {
  return DataSource({
    url: `/products/${data.id}`,
    method: "PUT",
    data
  });
};

export const ProductService = {
  showProductsService,
  showProductService,
  deleteProductService,
  addProductService,
  editProductService
};

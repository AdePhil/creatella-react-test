import React, { useState, useEffect } from 'react';
import "./index.scss"
import { fetchProducts } from "../../api/index";
import Products from "../../components/Products/index";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(response => {
      setProducts(response.data);
    }).catch(error => console.log(error));
  }, [products]);
  return (
    <div className="products-page">
      <h3 className="products-page__heading">Products Page</h3>
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
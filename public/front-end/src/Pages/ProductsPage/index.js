import React, { useState, useEffect } from 'react';
import "./index.scss"
import { fetchProducts } from "../../api/index";
import Products from "../../components/Products/index";
import Loader from "../../components/Loader/index";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProducts().then(response => {
      setProducts(response.data);
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  return (
    <div className="products-page">
      <div className="products-page__container">
        <h3 className="products-page__heading">Ascii Faces</h3>
        { loading ? <Loader /> : null}
        <Products products={products} />
      </div>
      
    </div>
  );
};

export default ProductsPage;
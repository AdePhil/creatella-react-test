import React from 'react';
import "./index.scss";
import Product from "../Product/index";

const Products = ({products}) =>  (
      <div className="products">
        {products.map(product => {
          return <Product product={product} key={product.id} />
        })}
      </div>
);
export default Products;
import React from 'react';
import "./index.scss"
const Product = ({product}) => {
  return (
    <div className="product">
      <div className="product__face" style={{ fontSize: product.size }}>{product.face}</div>
      <div className="product__price">&#36; {product.price}</div>
      <div className="product__date"></div>
    </div>
  );
};

export default Product;
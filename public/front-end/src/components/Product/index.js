import React from 'react';
import "./index.scss"
import { currencyFormatter, dateFormatter } from "../../helpers/index";
const Product = ({product}) => {
  return (
    <div className="product">
      <div className="product__face" style={{ fontSize: product.size }}>{product.face}</div>
      <div className="product__price">{ currencyFormatter(product.price) }</div>
      <div className="product__date">Listed: {dateFormatter(product.date)}</div>
    </div>
  );
};

export default Product;
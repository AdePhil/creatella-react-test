import React from 'react';
import "./index.scss";
import Product from "../Product/index";

const Products = ({products}) =>  (
      <div className="products">
        {products.map((product, i) => {
          if(i % 20 === 0 && i !== 0) {
            return (
            <React.Fragment key={product.id}>
            <div className="products__ad" >
              <img  className="products__ad-img" src={`/ads/?r=${Math.floor(Math.random()*1000)}`} alt="An ad is placed here" />
              <p className="text-center">A word from our sponsors</p>
              </div>
               <Product product={product} />
            </React.Fragment>
            )
          }
          return <Product product={product} key={product.id} />
        })}
      </div>
);
export default Products;
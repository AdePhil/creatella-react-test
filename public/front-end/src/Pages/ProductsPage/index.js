import React, { useState, useEffect } from 'react';
import "./index.scss"
import { fetchProducts } from "../../api/index";
import Products from "../../components/Products/index";
import Loader from "../../components/Loader/index";
import InfiniteScroll from 'react-infinite-scroll-component';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    getProducts({page, sortBy});
  }, [sortBy]);

  function getProducts({page, sortBy}) {
     fetchProducts({page, sortBy}).then(response => {
       const newProducts = [...products, ...response.data];
      setProducts(newProducts);
    }).catch(error => {
      console.log(error);
    });
  }

  function sort(e) {
    setProducts([]);
    setSortBy(e.target.value);
  }

  return (
    <div className="products-page">
      <h3 className="products-page__heading">Ascii Faces</h3>
         <p class="text-center products-page__sub-heading">Buy the best and the Cheapest ascii faces in the market.</p>
      <div className="products-page__container">
        <div className="products-page__filters">
          <h3 className="products-page__filters-heading">Sort By</h3>
          <label className="control control--radio">Smallest First
            <input type="radio" name="radio" value="size" id="size" onChange={e => sort(e) } />
            <div className="control__indicator"></div>
          </label>
           <label className="control control--radio">Cheapest First
            <input type="radio" name="radio" value="price" id="price" onChange={e => sort(e) }  />
            <div className="control__indicator"></div>
          </label>
           <label className="control control--radio">Id
            <input type="radio" name="radio" value="id" id="id" onChange={e => sort(e) }  />
            <div className="control__indicator"></div>
          </label>
        </div>
        <InfiniteScroll
          dataLength={products.length} 
          next={() => {
            getProducts({page: page+1, sortBy});
            setPage((page) => page + 1);
          }}
          hasMore={true}
          loader={<div className="loader"><Loader /></div>}
          endMessage={
            <p style={{textAlign: 'center'}}>~ end of catalogue ~</p>
          }>
             <Products products={products} />
        </InfiniteScroll>
        <div className="products-page__ad">
          <div className="products-page__ad-container">
            <div className="products-page__ad-group">
            <img class="ad" src={`/ads/?r=${Math.floor(Math.random()*1000)}`} />
            { products.length > 0 ? <p>But first, a word from our sponsors</p> : null }
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProductsPage;
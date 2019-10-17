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
  const [reset, setReset] = useState(false);

  useEffect(() => {
    getProducts({page, sortBy});
  }, [sortBy]);

  const  getProducts = ({page, sortBy}) => {
     fetchProducts({page, sortBy}).then(response => {
       const newProducts = [...products, ...response.data];
      setProducts(newProducts);
    }).catch(error => {
      console.log(error);
    });
  }

  const sort = (e) => {
    setProducts([]);
    setSortBy(e.target.value);
    setPage(1);
    setReset(true)
  }

  const resetFilters = () => {
    setProducts([]);
    setSortBy('');
  }



  return (
    <div className="products-page">
      <div><h3 className="products-page__heading">Products Grid</h3>
         <p className="text-center products-page__sub-heading">Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p></div>
      <div className="products-page__container">
        <div className="products-page__filters">
          <div className="products-page__filters-container">
          <div className="products-page__filters-group">
          <h3 className="products-page__filters-heading">Sort By</h3>
          <label className="control control--radio">Size
            <input type="radio" name="filter" value="size" id="size" onChange={e => sort(e) } />
            <div className="control__indicator"></div>
          </label>
           <label className="control control--radio">Price
            <input type="radio" name="filter" value="size" id="size" onChange={e => sort(e) } checked={sortBy !== ''} />
            <input type="radio" name="filter" value="price" id="price" onChange={e => sort(e) } checked={sortBy !== ''}  />
            <div className="control__indicator"></div>
          </label>
           <label className="control control--radio">Id
            <input type="radio" name="filter" value="id" id="id" onChange={e => sort(e) } checked={sortBy !== ''} />
            <div className="control__indicator"></div>
          </label>
          { sortBy !== '' ? <button onClick={() => resetFilters()} className="reset">Reset</button> : null }
          </div>
          </div>
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
            <p class="text-center">~ end of catalogue ~</p>
          }>
             <Products products={products} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ProductsPage;
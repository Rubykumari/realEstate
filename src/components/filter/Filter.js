import React from 'react';
import './filter.scss';

export const Filter = () => {
  return (
    <div className='filter'>
      <h1>Search results for <b>India</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='City Location' />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
          <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
          <option value="any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
            <option value="condo">Condo</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id='minPrice' name='minPrice' placeholder='Min Price' />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id='maxPrice' name='maxPrice' placeholder='Max Price' />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="number" id='bedroom' name='bedroom' placeholder='No. of Bedroom' />
        </div>
        <button>
          <img src="./assets/search.png" alt="" />
        </button>
      </div>
    </div>
  )
}

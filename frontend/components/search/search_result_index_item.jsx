import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultIndexItem = ({ food, selectFood }) => {
  return (
    <li className="search-result">
      <ul>
        <button onClick={selectFood(food)}>{food.name}</button>
        <li>{`${food.brand}, ${food.serving_size}, ${food.calories} calories`}</li>
      </ul>
    </li>
  );
};

export default SearchResultIndexItem;

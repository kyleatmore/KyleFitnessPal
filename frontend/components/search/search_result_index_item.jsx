import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultIndexItem = ({ food, selectFood }) => {
  return (
    <li className="search-result" onClick={selectFood(food)}>
      <ul>
        <li className="food-link">
          <button className="select-food button">
            {food.name}
          </button>
        </li>

        <li className="food-description">
          {`${food.brand}, ${food.serving_size}, ${food.calories} calories`}
        </li>
      </ul>
    </li>
  );
};

export default SearchResultIndexItem;

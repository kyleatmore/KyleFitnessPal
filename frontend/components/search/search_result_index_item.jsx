import React from 'react';

const SearchResultIndexItem = ({ food }) => {
  return (
    <li>
      <ul>
        <li>{food.name}</li>
        <li>{`${food.brand}, ${food.serving_size}, ${food.calories} calories`}</li>
      </ul>
    </li>
  );
};

export default SearchResultIndexItem;

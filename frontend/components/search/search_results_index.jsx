import React from 'react';
import SearchResultIndexItem from './search_result_index_item';
import AddFoodFormContainer from './add_food_form_container';

const SearchResultsIndex = ({ foods }) => {
  const foodItems = foods.map((food) => {
    return (
      <SearchResultIndexItem
        key={food.id}
        food={food}
      />
    );
  });

  return (
    <div>
      <h1>Matching Foods:</h1>
      <div className="search-index">
        <ul className="search-list">
          {foodItems}
        </ul>

        <AddFoodFormContainer />
      </div>
    </div>
  );
};

export default SearchResultsIndex;

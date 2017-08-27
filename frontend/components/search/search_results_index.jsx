import React from 'react';
import SearchResultIndexItem from './search_result_index_item';
import AddFoodFormContainer from './add_food_form_container';

class SearchResultsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedFood: "" };
    this.selectFood = this.selectFood.bind(this);
  }

  selectFood(food) {
    return (e) => {
      this.setState({ selectedFood: food });
    };
  }

  render() {
    const { foods, diary } = this.props;

    const foodItems = foods.map((food) => {
      return (
        <SearchResultIndexItem
          key={food.id}
          food={food}
          selectFood={this.selectFood}
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

          <AddFoodFormContainer
            selectedFood={this.state.selectedFood}
            diary={diary}
          />
        </div>
      </div>
    );

  }
}

export default SearchResultsIndex;

import React from 'react';
import merge from 'lodash/merge';
import SearchResultsIndex from './search_results_index';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "" };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.foods).length === 0) {
      this.props.requestAllFoods();
    }

    this.props.requestSingleDiary(this.props.match.params.diaryId);
  }

  componentWillUnmount() {
    this.props.clearSearchedFoods();
  }

  handleInput(e) {
    this.setState({ inputVal: e.target.value }, () => {
      this.props.searchFoods(this.state.inputVal);
    });
  }

  render() {
    if (!this.props.diary) return null;

    return (
      <div className="search">
          <h1>Add Food To Diary</h1>

          <section className="food-search">
            <form className="search-form">
              <h2>Search our food database by name:</h2>
              <input
                type="text"
                onChange={this.handleInput}
                value={this.state.inputVal}
              />
          </form>
          </section>

        <SearchResultsIndex
          foods={this.props.searchedFoods}
          diary={this.props.diary}
        />

      <p>
        Can't find what you're looking for? <Link to={`/food-diary/${this.props.diary.id}/add-food`}>Add a food to the database</Link>
      </p>
      </div>
    );
  }
}

export default Search;

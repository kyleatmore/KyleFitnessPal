import React from 'react';

class FoodDiaryHeader extends React.Component {
  render() {
    return (
      <div className="food-diary header">
        <h1>Your Food Diary For:</h1>
        <time>{this.props.date}</time>
      </div>
    );
  }
}

export default FoodDiaryHeader;

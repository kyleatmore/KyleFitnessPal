import React from 'react';
import { Link } from 'react-router-dom';

class FoodDiaryHeader extends React.Component {
  render() {
    return (
      <div className="food-diary header">
        <h1>Your Food Diary For:</h1>
        <div className="food-diary date">
          <Link className="prev-diary" to="/">&#9664;</Link>
          <time>{this.props.date}</time>
          <Link className="next-diary" to="/">&#9654;</Link>
        </div>
      </div>
    );
  }
}

export default FoodDiaryHeader;

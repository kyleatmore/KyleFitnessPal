import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav-bar">
      <Link className="nav-link home" to="/">MY HOME</Link>
      <Link
        className="nav-link food"
        to={`/food-diary/${this.props.currentDiary}`}>
        FOOD
      </Link>
      <Link
        className="nav-link exercise"
        to={`/exercise-diary/${this.props.currentExerciseDiary}`}>EXERCISE</Link>
      <Link className="nav-link goals" to="/goalsummary">GOALS</Link>
      </nav>
    );
  }
}

export default NavBar;

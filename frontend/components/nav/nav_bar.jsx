import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const steps = [
      {
        title: 'Food Diaries',
        text: 'Clicking here takes you to today\'s food diary',
        selector: '.nav-link.food',
        position: 'bottom',
        nextPage: 'diary',
      },
    ];
    this.props.addSteps(steps);
  }

  render() {
    return (
      <nav className="nav-bar">
      <Link className="nav-link" to="/">MY HOME</Link>
      <Link
        className="nav-link food"
        to={`/food-diary/${this.props.currentDiary}`}>
        FOOD
      </Link>
      <Link
        className="nav-link"
        to={`/exercise-diary/${this.props.currentExerciseDiary}`}>EXERCISE</Link>
      <Link className="nav-link" to="/goalsummary">GOALS</Link>
      </nav>
    );
  }
}

export default NavBar;

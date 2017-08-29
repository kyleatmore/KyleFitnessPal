import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav-bar">
      <Link className="nav-link" to="/">MY HOME</Link>
      <Link
        className="nav-link"
        to={`/food-diary/${this.props.currentDiary}`}
      >
        FOOD
      </Link>
      <Link className="nav-link" to="/">EXERCISE</Link>
      </nav>
    );
  }
}

export default NavBar;

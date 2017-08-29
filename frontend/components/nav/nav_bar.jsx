import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const today = new Date();
    this.props.findDiary(today);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/food-diary/${this.props.currentDiary}`);
  }

  render() {
    return (
      <nav className="nav-bar">
      <Link className="nav-link" to="/">MY HOME</Link>
      <Link
        className="nav-link"
        to="/"
        onClick={this.handleClick}
      >
        FOOD
      </Link>
      <Link className="nav-link" to="/">EXERCISE</Link>
      </nav>
    );
  }
}

export default NavBar;

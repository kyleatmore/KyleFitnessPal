import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.logout();
  }

  render() {
    const { currentUser } = this.props;

    if (currentUser) {
      return (
        <header>
          <h1>kyleFitnessPal</h1>
          <h3>Hi, {currentUser.username}</h3>
          <button onClick={this.handleClick}>Log Out</button>
        </header>
      );
    } else {
      return (
        <header>
          <h1>kyleFitnessPal</h1>
          <ul className='header-links'>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </header>
      );
    }
  }
}

export default Header;

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
    const { currentUser, location } = this.props;

    if (currentUser) {
      return (
        <header>
          <Link to="/"><h1>kyleFitnessPal</h1></Link>
          <h3>Hi, {currentUser.username}</h3>
          <button onClick={this.handleClick}>Log Out</button>
        </header>
      );
    } else if (location.pathname === "/signup") {
        return (
          <header>
            <Link to="/"><h1>kyleFitnessPal</h1></Link>
            <p>Create Your Free Account</p>
          </header>
        );
    } else {
        return (
          <header>
            <Link to="/"><h1>kyleFitnessPal</h1></Link>
            <ul className='header-links'>
              <li className="login-link"><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Log In</Link></li>
            </ul>
          </header>
        );
    }
  }
}

export default Header;

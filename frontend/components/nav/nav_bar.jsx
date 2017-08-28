import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser }) => {
  const latestDiary = currentUser.foodDiaryIds.slice(-1)[0]

  return (
    <nav className="nav-bar">
      <Link className="nav-link" to="/">MY HOME</Link>
      <Link className="nav-link" to={`/food-diary/${latestDiary}`}>FOOD</Link>
      <Link className="nav-link" to="/">EXERCISE</Link>
    </nav>
  );
};

export default NavBar;

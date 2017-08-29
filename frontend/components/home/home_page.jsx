import React from 'react';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.requestAllFoods();
    const today = new Date();
    this.props.findDiary(today);
  }

  render() {
    return (
      <h1>Home Page Will Go Here</h1>
    );
  }
}

export default HomePage;

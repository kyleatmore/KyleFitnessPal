import React from 'react';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.requestAllFoods();
  }

  render() {
    return (
      <h1>Home Page Will Go Here</h1>
    );
  }
}

export default HomePage;

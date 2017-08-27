import React from 'react';

class FoodDiaryIndexItem extends React.Component {
  render() {
    const { entry } = this.props;

    return (
      <tr>
        <td>{`${entry.brand} - ${entry.name}`}</td>
        <td>{entry.calories}</td>
        <td>{entry.carbohydrates}</td>
        <td>{entry.fats}</td>
        <td>{entry.protein}</td>
      </tr>
    );
  }
}

export default FoodDiaryIndexItem;

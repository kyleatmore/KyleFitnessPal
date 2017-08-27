import React from 'react';

class FoodDiaryIndexItem extends React.Component {
  render() {
    const { entry } = this.props;

    return (
      <tr>
        <td className="diary-item first">{`${entry.brand} - ${entry.name}`}</td>
        <td className="diary-item diary-row">{entry.calories}</td>
        <td className="diary-item diary-row">{entry.carbohydrates}</td>
        <td className="diary-item diary-row">{entry.fats}</td>
        <td className="diary-item diary-row">{entry.protein}</td>
      </tr>
    );
  }
}

export default FoodDiaryIndexItem;

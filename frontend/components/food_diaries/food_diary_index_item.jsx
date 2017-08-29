import React from 'react';

class FoodDiaryIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteFoodEntry(this.props.diary, this.props.entry.foodLogging);
  }

  render() {
    const { entry, deleteEntry } = this.props;

    return (
      <tr>
        <td
          className="diary-item first"
          onClick={this.props.selectEntry(entry)}
        >
          {`${entry.brand} - ${entry.name}`}
        </td>
        <td className="diary-item diary-row">{entry.calories}</td>
        <td className="diary-item diary-row">{entry.carbohydrates}</td>
        <td className="diary-item diary-row">{entry.fats}</td>
        <td className="diary-item diary-row">{entry.protein}</td>
        <td
          className="diary-item diary-row delete-entry"
          onClick={this.handleClick}
        >
          &#x232b;
        </td>
      </tr>
    );
  }
}

export default FoodDiaryIndexItem;

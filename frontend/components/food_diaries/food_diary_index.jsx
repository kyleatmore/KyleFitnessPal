import React from 'react';
import FoodDiaryIndexItem from './food_diary_index_item';
import FoodDiaryTotal from './food_diary_total';

class FoodDiaryIndex extends React.Component {
  render() {
    const breakfastItems = this.props.breakfastEntries.map((entry) => {
      return <FoodDiaryIndexItem key={entry.id} entry={entry} />;
    });
    const lunchItems = this.props.lunchEntries.map((entry) => {
      return <FoodDiaryIndexItem key={entry.id} entry={entry} />;
    });
    const dinnerItems = this.props.dinnerEntries.map((entry) => {
      return <FoodDiaryIndexItem key={entry.id} entry={entry} />;
    });

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th className="goal-header title">Breakfast</th>
              <th className="goal-header target">Calories</th>
              <th className="goal-header target">Carbs</th>
              <th className="goal-header target">Fat</th>
              <th className="goal-header target">Protein</th>
            </tr>
            {breakfastItems}

            <tr>
              <td>Lunch</td>
            </tr>
            {lunchItems}

            <tr>
              <td>Dinner</td>
            </tr>
            {dinnerItems}
            
          </tbody>
        </table>

        <FoodDiaryTotal
          diary={this.props.diary}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default FoodDiaryIndex;

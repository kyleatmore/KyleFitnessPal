import React from 'react';
import FoodDiaryIndexItem from './food_diary_index_item';

class FoodDiaryIndex extends React.Component {
  render() {

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


            <tr>
              <td>Lunch</td>
            </tr>


            <tr>
              <td>Dinner</td>
            </tr>
            
          </tbody>
        </table>

        <h1>Food Diary Total Component</h1>
      </div>
    );
  }
}

export default FoodDiaryIndex;

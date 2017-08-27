import React from 'react';

export const FoodDiaryTotal = (props) => {
  const total = props.diary.total_macros;
  const { currentUser } = props;

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Totals</td>
            <td>{total.calories}</td>
            <td>{total.carbs}</td>
            <td>{total.fats}</td>
            <td>{total.protein}</td>
          </tr>

          <tr>
            <td>Your Daily Goal</td>
            <td>{currentUser.calorie_allowance}</td>
            <td>{currentUser.carb_allowance}</td>
            <td>{currentUser.fat_allowance}</td>
            <td>{currentUser.protein_allowance}</td>
          </tr>

          <tr>
            <td>Your Daily Goal</td>
            <td>{currentUser.calorie_allowance - total.calories}</td>
            <td>{currentUser.carb_allowance - total.carbs}</td>
            <td>{currentUser.fat_allowance - total.fats}</td>
            <td>{currentUser.protein_allowance - total.protein}</td>
          </tr>

          <tr>
            <td>Breakfast</td>
            <td>Calories</td>
            <td>Carbs</td>
            <td>Fat</td>
            <td>Protein</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FoodDiaryTotal;

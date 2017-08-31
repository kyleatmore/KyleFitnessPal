import React from 'react';
import FoodDiaryIndexItem from './food_diary_index_item';
import FoodDiaryTotal from './food_diary_total';
import EditFoodFormContainer from './edit_food_form_container';
import { Link } from 'react-router-dom';

class FoodDiaryIndex extends React.Component {
  constructor(props) {
      super(props);
      this.state = { selectedEntry: "" };
      this.selectEntry = this.selectEntry.bind(this);
      this.clearSelectedEntry = this.clearSelectedEntry.bind(this);
  }

  selectEntry(entry) {
    return (e) => {
      this.setState({ selectedEntry: entry });
    };
  }

  clearSelectedEntry() {
    this.setState({ selectedEntry: "" });
  }

  render() {
    const breakfastItems = this.props.breakfastEntries.map((entry) => {
      return <FoodDiaryIndexItem
                key={entry.foodLogging.id}
                entry={entry}
                diary={this.props.diary}
                deleteFoodEntry={this.props.deleteFoodEntry}
                selectEntry={this.selectEntry}/>;
    });
    const lunchItems = this.props.lunchEntries.map((entry) => {
      return <FoodDiaryIndexItem
                key={entry.foodLogging.id}
                entry={entry}
                diary={this.props.diary}
                deleteFoodEntry={this.props.deleteFoodEntry}
                selectEntry={this.selectEntry}/>;
    });
    const dinnerItems = this.props.dinnerEntries.map((entry) => {
      return <FoodDiaryIndexItem
                key={entry.foodLogging.id}
                entry={entry}
                diary={this.props.diary}
                deleteFoodEntry={this.props.deleteFoodEntry}
                selectEntry={this.selectEntry}/>;
    });
    const { totalMacros, breakfastMacros, lunchMacros, dinnerMacros } = this.props.diary;
    const { currentUser, diary, exerciseDiary } = this.props;

    let exerciseClass = "";
    const exerciseCals = exerciseDiary.dailySummary.cals_burned;
    if (exerciseCals === 0) { exerciseClass = "hidden"; }

    const calorieAllowance = currentUser.calorie_allowance + exerciseCals;
    const carbAllowance = currentUser.carb_allowance + Math.round(exerciseCals / 8);
    const fatAllowance = currentUser.fat_allowance + Math.round(exerciseCals * 0.3 / 9);
    const proteinAllowance = currentUser.protein_allowance + Math.round(exerciseCals / 20);


    const calorieColor = calorieAllowance >= totalMacros.calories ? "green" : "red";
    const carbColor = carbAllowance >= totalMacros.carbs ? "green" : "red";
    const fatColor = fatAllowance >= totalMacros.fats ? "green" : "red";
    const proteinColor = proteinAllowance >= totalMacros.protein ? "green" : "red";

    return (
      <div>
        <table>
          <tbody>
            <tr className="meal-category">
              <th className="diary category first">Breakfast</th>
              <th className="macro-header diary-row">Calories <span className="opaque">kcal</span></th>
              <th className="macro-header diary-row">Carbs <span className="opaque">g</span></th>
              <th className="macro-header diary-row">Fat <span className="opaque">g</span></th>
              <th className="macro-header diary-row">Protein <span className="opaque">g</span></th>
            </tr>
            {breakfastItems}
            <tr>
              <td className="diary-item first add-food">
                <Link to={`/food-diary/${this.props.diary.id}/log-food`}>Add Food</Link>
              </td>
              <td className="diary-item diary-row subtotal">{breakfastMacros.calories}</td>
              <td className="diary-item diary-row subtotal">{breakfastMacros.carbs}</td>
              <td className="diary-item diary-row subtotal">{breakfastMacros.fats}</td>
              <td className="diary-item diary-row subtotal">{breakfastMacros.protein}</td>
            </tr>

            <tr className="meal-category">
              <td className="diary category first">Lunch</td>
            </tr>
            {lunchItems}
            <tr>
              <td className="diary-item first add-food">
                <Link to={`/food-diary/${this.props.diary.id}/log-food`}>Add Food</Link>
              </td>
              <td className="diary-item diary-row subtotal">{lunchMacros.calories}</td>
              <td className="diary-item diary-row subtotal">{lunchMacros.carbs}</td>
              <td className="diary-item diary-row subtotal">{lunchMacros.fats}</td>
              <td className="diary-item diary-row subtotal">{lunchMacros.protein}</td>
            </tr>

            <tr className="meal-category">
              <td className="diary category first">Dinner</td>
            </tr>
            {dinnerItems}
            <tr>
              <td className="diary-item first add-food">
                <Link to={`/food-diary/${this.props.diary.id}/log-food`}>Add Food</Link>
              </td>
              <td className="diary-item diary-row subtotal">{dinnerMacros.calories}</td>
              <td className="diary-item diary-row subtotal">{dinnerMacros.carbs}</td>
              <td className="diary-item diary-row subtotal">{dinnerMacros.fats}</td>
              <td className="diary-item diary-row subtotal">{dinnerMacros.protein}</td>
            </tr>

            <tr>
              <td className="empty-row"></td>
            </tr>

            <tr className="diary-totals">
              <td className="total-category">Totals</td>
              <td className="diary-row">{totalMacros.calories}</td>
              <td className="diary-row">{totalMacros.carbs}</td>
              <td className="diary-row">{totalMacros.fats}</td>
              <td className="diary-row">{totalMacros.protein}</td>
            </tr>

            <tr className="diary-totals">
              <td className="total-category">Your Daily Goal</td>
              <td className="diary-row">{calorieAllowance}</td>
              <td className="diary-row">{carbAllowance}</td>
              <td className="diary-row">{fatAllowance}</td>
              <td className="diary-row">{proteinAllowance}</td>
            </tr>

            <tr className="diary-totals">
              <td className="total-category">Remaining</td>
              <td className={`${calorieColor} diary-row`}>
                {calorieAllowance - totalMacros.calories}
              </td>
              <td className={`${carbColor} diary-row`}>
                {carbAllowance - totalMacros.carbs}
              </td>
              <td className={`${fatColor} diary-row`}>
                {fatAllowance - totalMacros.fats}
              </td>
              <td className={`${proteinColor} diary-row`}>
                {proteinAllowance - totalMacros.protein}
              </td>
            </tr>

            <tr className="meal-category">
              <th className="diary category first"></th>
              <th className="macro-header diary-row">Calories <span className="opaque">kcal</span></th>
              <th className="macro-header diary-row">Carbs <span className="opaque">g</span></th>
              <th className="macro-header diary-row">Fat <span className="opaque">g</span></th>
              <th className="macro-header diary-row">Protein <span className="opaque">g</span></th>
            </tr>

            <tr>
              <td></td>
              <td colSpan="4">
                <p className={`additional-exercise ${exerciseClass}`}>
                  {`*You've earned ${exerciseCals}
                  extra calories from exercise today!`}
                </p>
              </td>
            </tr>
          </tbody>

        </table>

        <EditFoodFormContainer
          selectedEntry={this.state.selectedEntry}
          clearSelectedEntry={this.clearSelectedEntry}
          diary={diary}
        />
      </div>
    );
  }
}

export default FoodDiaryIndex;

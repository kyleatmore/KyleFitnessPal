import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.foods).length === 0) {
      this.props.requestAllFoods();
    }

    if (Object.keys(this.props.exercises).length === 0) {
      this.props.requestAllExercises();
    }

    const today = new Date();
    this.props.findDiary(today);
    this.props.findExerciseDiary(today);
  }

  updateFile(e) {
    var imageFile = e.currentTarget.files[0];
    const formData = new FormData ();
    formData.append("user[avatar]", imageFile);

    if (imageFile) {
      this.props.addAvatar(formData, this.props.currentUser);
    }
  }

  render() {
    const { currentUser, diary, exerciseDiary } = this.props;
    if (!diary || !exerciseDiary) { return null; }

    const netCalories = diary.totalMacros.calories - exerciseDiary.dailySummary.cals_burned
    const caloriesPercent = (netCalories / currentUser.calorie_allowance) * 100;
    let progressStyle, progressClass;
    if (caloriesPercent <= 0) {
      progressStyle = { width: "0%" };
      progressClass = "under";
    } else if (caloriesPercent > 100) {
      progressStyle = { width: "100%" };
      progressClass = "over";
    } else {
      progressStyle = { width: `${caloriesPercent}%` };
      progressClass = "under";
    }

    return (
      <div className="daily-summary">
        <div className="summary-header">
          <h3>Your Daily Summary</h3>
        </div>

        <div className="summary-content">
          <section>
            <img className="profile-pic" src={currentUser.avatar_url}/>

            <div className="file-input">
              <label htmlFor="avatar-upload">Upload Photo</label>
              <input type="file" id="avatar-upload" onChange={this.updateFile} />
            </div>
          </section>

          <section className="summary-info">
            <span>Calories Remaining</span>
              <ul className="cals-remaining">
                <li><strong className={progressClass}>
                  {currentUser.calorie_allowance - netCalories}
                </strong></li>

                <li>
                  <ul className="add-buttons">
                    <li>
                      <Link to={`/exercise-diary/${exerciseDiary.id}`}>
                        Add Exercise
                      </Link>
                    </li>
                    <li>
                      <Link to={`/food-diary/${diary.id}`} className="food">
                        Add Food
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

            <ul className="net-calories">
              <li className="home-page goal">
                {currentUser.calorie_allowance}
                <span>GOAL</span>
              </li>
              <li>
                {diary.totalMacros.calories}
                <span>FOOD</span>
              </li>
              <li className="symbol">-</li>
              <li>
                {exerciseDiary.dailySummary.cals_burned}
                <span>EXERCISE</span>
              </li>
              <li className="symbol">=</li>
              <li>
                {netCalories}
                <span>NET</span>
              </li>
            </ul>

            <div className="progress-bar">
              <div
                className={`progress ${progressClass}`} style={progressStyle}>
              </div>
            </div>
          </section>
        </div>

      </div>
    );
  }
}

export default HomePage;

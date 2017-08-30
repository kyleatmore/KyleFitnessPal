import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { imageFile: null };
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
    const caloriesPercent = Math.round((netCalories / currentUser.calorie_allowance) * 100);
    const progressStyle = { width: `${caloriesPercent}%` }

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
                <li><strong>{currentUser.calorie_allowance - netCalories}</strong></li>

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
              <li>
                {currentUser.calorie_allowance}
                <span>GOAL</span>
              </li>
              <li>
                {diary.totalMacros.calories}
                <span>FOOD</span>
              </li>
              <li>-</li>
              <li>
                {exerciseDiary.dailySummary.cals_burned}
                <span>EXERCISE</span>
              </li>
              <li>=</li>
              <li>
                {netCalories}
                <span>NET</span>
              </li>
            </ul>

            <div className="progress-bar">
              <div className="progress" style={progressStyle}></div>
            </div>
          </section>
        </div>

      </div>
    );
  }
}

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseSearchResultIndexItem = ({ exercise, selectExercise }) => {
  return (
    <li className="search-result" onClick={selectExercise(exercise)}>
      <ul>
        <li className="food-link">
          <button className="select-food button">
            {exercise.name}
          </button>
        </li>

        <li className="food-description">
          {`${exercise.cals_burned_per_min} cals per min`}
        </li>
      </ul>
    </li>
  );
};

export default ExerciseSearchResultIndexItem;

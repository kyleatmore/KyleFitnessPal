import values from 'lodash/values';
import merge from 'lodash/merge';

export const selectAllFoods = (state) => {
  return values(state.entities.foods);
};

export const selectDiaryEntries = (state, diaryId, meal) => {
  const diary = state.entities.foodDiaries[diaryId];
  const foodLoggings = state.entities.foodLoggings;
  if (!diary) { return []; }

  const entries = [];
  diary.foodLoggingIds.forEach((logId) => {
    const log = foodLoggings[logId];
    if (log.meal === meal) {
      const food = state.entities.foods[log.food_id];
      const entry = merge({}, food, {
        calories: Math.round(food.calories * log.servings),
        carbohydrates: Math.round(food.carbohydrates * log.servings),
        fats: Math.round(food.fats * log.servings),
        protein: Math.round(food.protein * log.servings),
        foodLogging: log,
      });
      entries.push(entry);
    }
  });
  return entries;
};

export const selectAllExercises = (state) => {
  return values(state.entities.exercises);
};

export const selectExerciseDiaryEntries = (state, exerciseDiaryId) => {
  const exerciseDiary = state.entities.exerciseDiaries[exerciseDiaryId];
  const exerciseLoggings = state.entities.exerciseLoggings;
  if (!exerciseDiary) { return []; }

  const entries = [];
  exerciseDiary.exerciseLoggingIds.forEach((logId) => {
    const log = exerciseLoggings[logId];
    const exercise = state.entities.exercises[log.exercise_id];
    const entry = {
      exerciseLogging: log,
      exercise,
      minutes: log.minutes,
      calories: log.total_cals_burned
    };
    entries.push(entry);
  });

  return entries;
};

export const selectSearchedFoods = (state) => {
  const searchedFoods = [];

  state.search.searchedFoodIds.forEach((id) => {
    searchedFoods.push(state.entities.foods[id]);
  });

  return searchedFoods;
};

export const selectSearchedExercises = (state) => {
  const searchedExercises = [];

  state.search.searchedExerciseIds.forEach((id) => {
    searchedExercises.push(state.entities.exercises[id]);
  });

  return searchedExercises;
};

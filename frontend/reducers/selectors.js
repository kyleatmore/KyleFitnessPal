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
        calories: food.calories * log.servings,
        carbohydrates: food.carbohydrates * log.servings,
        fats: food.fats * log.servings,
        protein: food.protein * log.servings,
        foodLogging: log,
      });
      entries.push(entry);
    }
  });
  return entries;
};

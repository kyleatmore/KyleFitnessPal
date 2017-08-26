import values from 'lodash/values';

export const selectAllFoods = (state) => {
  return values(state.entities.foods);
};

export const fetchSingleDiary = (diaryId) => {
  return $.ajax({
    method: "GET",
    url: `/api/food_diaries/${diaryId}`
  });
};

export const addFoodEntryToDiary = (diaryId, food_logging) => {
  return $.ajax({
    method: "POST",
    url: `api/food_diaries/${diaryId}/food_loggings`,
    data: { food_logging }
  });
};

export const deleteFoodEntry = (diary, food_logging) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/food_diaries/${diary.id}/food_loggings/${food_logging.id}`
  });
};

export const findDiary = (date) => {
  return $.ajax({
    method: "POST",
    url: "/api/food_diaries/find_diary",
    data: { date }
  });
};

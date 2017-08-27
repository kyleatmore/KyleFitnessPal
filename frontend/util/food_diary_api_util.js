export const fetchSingleDiary = (diaryId) => {
  return $.ajax({
    method: "GET",
    url: `/api/food_diaries/${diaryId}`
  });
};

export const addFoodEntryToDiary = (diaryId, foodLogging) => {
  return $.ajax({
    method: "POST",
    url: `api/food_diaries/${diaryId}/food_loggings`,
    data: { foodLogging }
  });
};

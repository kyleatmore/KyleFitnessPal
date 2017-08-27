export const fetchSingleDiary = (diaryId) => {
  return $.ajax({
    method: "GET",
    url: `/api/food_diaries/${diaryId}`
  });
};

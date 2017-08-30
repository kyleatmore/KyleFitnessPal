export const fetchSingleDiary = (diaryId) => {
  return $.ajax({
    method: "GET",
    url: `/api/exercise_diaries/${diaryId}`
  });
};

export const addExerciseEntryToDiary = (diaryId, exercise_logging) => {
  return $.ajax({
    method: "POST",
    url: `api/exercise_diaries/${diaryId}/exercise_loggings`,
    data: { exercise_logging }
  });
};

export const deleteExerciseEntry = (diary, exercise_logging) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/exercise_diaries/${diary.id}/exercise_loggings/${exercise_logging.id}`
  });
};

export const findDiary = (date) => {
  return $.ajax({
    method: "POST",
    url: "/api/exercise_diaries/find_diary",
    data: { date }
  });
};

export const updateExerciseEntry = (diary, exercise_logging) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/exercise_diaries/${diary.id}/exercise_loggings/${exercise_logging.id}`,
    data: { exercise_logging }
  });
};

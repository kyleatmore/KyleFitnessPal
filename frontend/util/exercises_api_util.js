export const fetchAllExercises = () => {
  return $.ajax({
    method: "GET",
    url: "/api/exercises"
  });
};

export const searchExercises = (searchVal) => {
  return $.ajax({
    method: "GET",
    url: "api/exercises/search",
    data: { query: searchVal }
  });
};

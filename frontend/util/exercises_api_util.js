export const fetchAllExercises = () => {
  return $.ajax({
    method: "GET",
    url: "/api/exercises"
  });
};

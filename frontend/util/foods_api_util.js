export const fetchAllFoods = () => {
  return $.ajax({
    method: "GET",
    url: "/api/foods"
  });
};

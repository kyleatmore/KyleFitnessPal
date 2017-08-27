json.foodDiary do
  json.partial!("api/food_diaries/food_diary", diary: @food_diary)
end

json.foodLoggings do
  json.array! @food_diary.food_loggings, partial: "api/food_loggings/food_logging", as: :logging
end

json.foods do
  json.array! @food_diary.foods, partial: "api/foods/food", as: :food
end

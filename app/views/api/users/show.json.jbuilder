json.user do
  json.partial!('api/users/user', user: @user)
end

json.foodDiaries do
  json.array! @user.food_diaries, partial: "api/food_diaries/food_diary", as: :diary
end

json.foodLoggings do
  json.array! @user.food_loggings, partial: "api/food_loggings/food_logging", as: :logging
end

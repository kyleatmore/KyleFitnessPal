json.user do
  json.partial!('api/users/user', user: @user)
end

json.foodDiaries do
  json.array! @user.food_diaries, partial: "api/food_diaries/food_diary", as: :diary
end

food_diaries = @user.food_diaries
food_loggings = []

food_diaries.each do |diary|
  food_loggings += diary.food_loggings
end

json.foodLoggings do
  json.array! food_loggings, partial: "api/food_loggings/food_logging", as: :logging
end

json.exerciseDiaries do
  json.array! @user.exercise_diaries, partial: "api/exercise_diaries/exercise_diary", as: :diary
end

exercise_diaries = @user.exercise_diaries
exercise_loggings = []

exercise_diaries.each do |diary|
  exercise_loggings += diary.exercise_loggings
end


json.exerciseLoggings do
  json.array! exercise_loggings, partial: "api/exercise_loggings/exercise_logging", as: :logging
end

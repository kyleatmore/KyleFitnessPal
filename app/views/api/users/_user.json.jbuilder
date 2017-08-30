json.extract! user, :id, :username, :email, :height, :gender, :age, :calorie_allowance, :carb_allowance, :protein_allowance, :fat_allowance
json.extract! user.current_goal, :current_weight, :goal_weight, :activity_level, :goal_description, :goal_details
json.foodDiaryIds user.food_diary_ids
json.exerciseDiaryIds user.exercise_diary_ids
json.avatar_url asset_path(user.avatar.url)

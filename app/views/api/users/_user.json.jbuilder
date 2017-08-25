json.extract! user, :id, :username, :email, :height, :gender, :age, :calorie_allowance, :carb_allowance, :protein_allowance, :fat_allowance
json.extract! user.current_goal, :current_weight, :goal_weight, :activity_level, :goal_description

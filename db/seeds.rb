User.destroy_all
Goal.destroy_all
FoodDiary.destroy_all
FoodLogging.destroy_all
Food.destroy_all
ExerciseDiary.destroy_all
ExerciseLogging.destroy_all
Exercise.destroy_all

kyle = User.new(
  email: "kyledemo@gmail.com",
  password: "password",
  height: 70,
  gender: "M",
  birth_date: Date.new(1989, 9, 5),
  username: "Kyle",
  goals_attributes: [
    {
      current_weight: 160,
      goal_weight: 170,
      activity_level: "Spend a good part of the day on your feet (e.g. teacher, salesperson)",
      goal_description: "Gain 1 pound per week"
    }
  ]
)

kyle.save!

File.open("lib/assets/food_data.txt", "r") do |file|
  food_data = JSON.parse(file.read)

  food_data.each do |food|
    Food.create(
    brand: "Generic",
    name: food["name"],
    calories: food["nutrients"][0]["value"],
    carbohydrates: food["nutrients"][3]["value"],
    protein: food["nutrients"][1]["value"],
    fats: food["nutrients"][2]["value"],
    serving_size: food["measure"]
    )
  end
end

File.open("lib/assets/exercise_data.txt", "r") do |file|
  exercise_data = file.readlines
  i = 0

  while i < exercise_data.length
    name = exercise_data[i].strip.split("\t").join(' ')
    calories = Integer(exercise_data[i + 1])
    Exercise.create(name: name, cals_burned_per_min: calories)
    i += 2
  end
end

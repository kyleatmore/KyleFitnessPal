# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Goal.destroy_all
FoodDiary.destroy_all
FoodLogging.destroy_all
Food.destroy_all

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

kyle.save

40.times do
  Food.create(
  brand: Faker::Food.dish,
  name: Faker::Food.ingredient,
  calories: (rand * 150).round,
  carbohydrates: (rand * 50).round,
  protein: (rand * 25).round,
  fats: (rand * 40).round,
  serving_size: Faker::Food.measurement
  )
end

FoodDiary.create(date: Date.today, user_id: kyle.id)
FoodDiary.create(date: Date.yesterday, user_id: kyle.id)

meals = ["breakfast", "lunch", "dinner"]

10.times do
  FoodLogging.create(
  servings: rand(1..3),
  meal: meals.sample,
  food_id: Food.all.sample.id,
  food_diary_id: FoodDiary.all.sample.id
  )
end

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

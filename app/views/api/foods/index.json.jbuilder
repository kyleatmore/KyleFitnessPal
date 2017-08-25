@foods.each do |food|
  json.set! food.id do
    json.partial!("api/foods/food", food: food)
  end
end

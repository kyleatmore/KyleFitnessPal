@exercises.each do |exercise|
  json.set! exercise.id do
    json.partial!("api/exercises/exercise", exercise: exercise)
  end
end

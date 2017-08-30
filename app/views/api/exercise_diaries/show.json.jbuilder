json.exerciseDiary do
  json.partial!("api/exercise_diaries/exercise_diary", diary: @exercise_diary)
end

json.exerciseLoggings do
  json.array! @exercise_diary.exercise_loggings, partial: "api/exercise_loggings/exercise_logging", as: :logging
end

json.exercises do
  json.array! @exercise_diary.exercises, partial: "api/exercises/exercise", as: :exercise
end

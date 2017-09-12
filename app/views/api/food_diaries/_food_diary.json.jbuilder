json.extract! diary, :id, :date, :user_id
json.totalMacros diary.total_macros
json.breakfastMacros FoodDiary.subtotal(diary, "breakfast")
json.lunchMacros FoodDiary.subtotal(diary, "lunch")
json.dinnerMacros FoodDiary.subtotal(diary, "dinner")
json.date_string diary.date_string
json.foodLoggingIds diary.food_logging_ids

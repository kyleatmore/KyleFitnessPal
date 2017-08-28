json.extract! diary, :id, :date, :user_id
json.totalMacros diary.total_macros
json.breakfastMacros diary.subtotal("breakfast")
json.lunchMacros diary.subtotal("lunch")
json.dinnerMacros diary.subtotal("dinner")
json.date_string diary.date_string
json.foodLoggingIds diary.food_logging_ids

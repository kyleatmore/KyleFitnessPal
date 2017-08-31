json.extract! diary, :id, :date, :user_id
json.dailySummary diary.daily_summary
json.weeklySummary diary.weekly_summary
json.date_string diary.date_string
json.exerciseLoggingIds diary.exercise_logging_ids

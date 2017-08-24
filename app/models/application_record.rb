class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  SEDENTARY = "Spend most of the day sitting (e.g. bank teller, desk job)"
  LIGHTLY_ACTIVE = "Spend a good part of the day on your feet (e.g. teacher, salesperson)"
  ACTIVE = "Spend a good part of the day doing some physical activity (e.g. food server, postal carrier)"
  VERY_ACTIVE = "Spend most of the day doing heavy physical activity (e.g. bike messenger, carpenter)"

  GOAL_0 = "Lose 2 pounds per week"
  GOAL_1 = "Lose 1.5 pounds per week"
  GOAL_2 = "Lose 1 pound per week"
  GOAL_3 = "Lose 0.5 pounds per week"
  GOAL_4 = "Maintain my current weight"
  GOAL_5 = "Gain 0.5 pounds per week"
  GOAL_6 = "Gain 1 pound per week"
end

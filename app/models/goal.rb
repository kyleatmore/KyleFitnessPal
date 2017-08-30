# == Schema Information
#
# Table name: goals
#
#  id               :integer          not null, primary key
#  current_weight   :integer          not null
#  goal_weight      :integer          not null
#  activity_level   :integer          not null
#  goal_description :integer          not null
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Goal < ApplicationRecord
  validates :current_weight, :goal_weight, :activity_level, :goal_description, :user, presence: true
  enum activity_level: [
    SEDENTARY.to_sym, LIGHTLY_ACTIVE.to_sym, ACTIVE.to_sym, VERY_ACTIVE.to_sym
  ]
  enum goal_description: [
    GOAL_0.to_sym, GOAL_1.to_sym, GOAL_2.to_sym, GOAL_3.to_sym, GOAL_4.to_sym,
    GOAL_5.to_sym, GOAL_6.to_sym,
  ]

  belongs_to :user, inverse_of: :goals

  def activity_multiplier()
    case self.activity_level
    when SEDENTARY
      return 1.2
    when LIGHTLY_ACTIVE
      return 1.375
    when ACTIVE
      return 1.55
    when VERY_ACTIVE
      return 1.725
    end
  end

  def calorie_modifier()
    case self.goal_description
    when GOAL_0
      return -1000
    when GOAL_1
      return -750
    when GOAL_2
      return -500
    when GOAL_3
      return -250
    when GOAL_4
      return 0
    when GOAL_5
      return 250
    when GOAL_6
      return 500
    end
  end

  def goal_details
    case self.goal_description
    when GOAL_0
      return { type: "loss", perWeek: "2.0 lbs per week", longTerm: "10 lbs" }
    when GOAL_1
      return { type: "loss", perWeek: "1.5 lbs per week", longTerm: "7.5 lbs" }
    when GOAL_2
      return { type: "loss", perWeek: "1 lb per week", longTerm: "5 lbs" }
    when GOAL_3
      return { type: "loss", perWeek: "0.5 lbs per week", longTerm: "2.5 lbs" }
    when GOAL_4
      return { type: "loss", perWeek: "0 lbs per week", longTerm: "0 lbs" }
    when GOAL_5
      return { type: "gain", perWeek: "0.5 lbs per week", longTerm: "2.5 lbs" }
    when GOAL_6
      return { type: "gain", perWeek: "1 lb per week", longTerm: "5 lbs" }
    end
  end

end

# == Schema Information
#
# Table name: exercise_loggings
#
#  id                :integer          not null, primary key
#  minutes           :integer          not null
#  exercise_id       :integer          not null
#  exercise_diary_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class ExerciseLogging < ApplicationRecord
  validates :minutes, :exercise, :exercise_diary, presence: true

  belongs_to :exercise_diary
  belongs_to :exercise

  def total_cals_burned
    minutes * self.exercise.cals_burned_per_min
  end
end

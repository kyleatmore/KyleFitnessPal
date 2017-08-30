# == Schema Information
#
# Table name: exercise_diaries
#
#  id         :integer          not null, primary key
#  date       :date             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ExerciseDiary < ApplicationRecord
  validates :date, :user, presence: true
  validates :date, uniqueness: { scope: :user }

  belongs_to :user
  has_many :exercise_loggings
  has_many :exercises, through: :exercise_loggings

  def date_string
    self.date.strftime('%A, %B %d, %Y')
  end
  
  def daily_summary
    summary = { minutes: 0, cals_burned: 0 }
    loggings = self.exercise_loggings.includes(:exercise)

    loggings.each do |log|
      summary[:minutes] += log.minutes
      summary[:cals_burned] += (log.exercise.cals_burned_per_min * log.minutes).round
    end

    return summary
  end
end

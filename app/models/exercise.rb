# == Schema Information
#
# Table name: exercises
#
#  id                  :integer          not null, primary key
#  name                :string           not null
#  cals_burned_per_min :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Exercise < ApplicationRecord
  validates :name, :cals_burned_per_min, presence: true

  has_many :exercise_loggings
end

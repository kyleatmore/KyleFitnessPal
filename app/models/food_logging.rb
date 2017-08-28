# == Schema Information
#
# Table name: food_loggings
#
#  id            :integer          not null, primary key
#  servings      :float            not null
#  meal          :string           not null
#  food_id       :integer          not null
#  food_diary_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class FoodLogging < ApplicationRecord
  validates :servings, :meal, :food, :food_diary, presence: true
  validates :meal, inclusion: { in: %w(breakfast lunch dinner snack) }

  belongs_to :food_diary
  belongs_to :food
end

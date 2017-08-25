# == Schema Information
#
# Table name: food_diaries
#
#  id         :integer          not null, primary key
#  date       :date             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FoodDiary < ApplicationRecord
  validates :date, :user, presence: true
  validates :date, uniqueness: { scope: :user }

  belongs_to :user
  has_many :food_loggings
  has_many :foods, through: :food_loggings
end

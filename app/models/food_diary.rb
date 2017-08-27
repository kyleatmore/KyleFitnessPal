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

  def total_macros
    macros = { calories: 0, carbs: 0, fats: 0, protein: 0 }
    loggings = self.food_loggings.includes(:food)

    loggings.each do |log|
      macros[:calories] += log.food.calories * log.servings
      macros[:carbs] += log.food.carbohydrates * log.servings
      macros[:fats] += log.food.fats * log.servings
      macros[:protein] += log.food.protein * log.servings
    end

    return macros
  end

  def subtotal(meal)
    macros = { calories: 0, carbs: 0, fats: 0, protein: 0 }
    loggings = self.food_loggings.where(meal: meal).includes(:food)

    loggings.each do |log|
      macros[:calories] += log.food.calories * log.servings
      macros[:carbs] += log.food.carbohydrates * log.servings
      macros[:fats] += log.food.fats * log.servings
      macros[:protein] += log.food.protein * log.servings
    end

    return macros
  end
end

# == Schema Information
#
# Table name: foods
#
#  id            :integer          not null, primary key
#  brand         :string           not null
#  name          :string           not null
#  calories      :integer          not null
#  carbohydrates :integer          not null
#  protein       :integer          not null
#  fats          :integer          not null
#  serving_size  :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Food < ApplicationRecord
  validates :brand, :name, :calories, :carbohydrates, :protein,
            :fats, :serving_size, presence: true

  has_many :food_loggings
end

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
  include PgSearch
  pg_search_scope :search_by_name,
                  :against => :name,
                  :using => {
                    :tsearch => {:prefix => true},
                    :trigram => {:threshold => 0.2}
                  }

  validates :brand, :name, :calories, :carbohydrates, :protein,
            :fats, :serving_size, presence: true

  has_many :food_loggings
end

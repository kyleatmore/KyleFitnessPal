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

require 'test_helper'

class FoodLoggingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

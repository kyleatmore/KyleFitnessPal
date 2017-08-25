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

require 'test_helper'

class FoodTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

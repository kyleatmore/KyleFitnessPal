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

require 'test_helper'

class ExerciseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

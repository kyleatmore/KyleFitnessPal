# == Schema Information
#
# Table name: exercise_loggings
#
#  id                :integer          not null, primary key
#  minutes           :integer          not null
#  exercise_id       :integer          not null
#  exercise_diary_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class ExerciseLoggingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

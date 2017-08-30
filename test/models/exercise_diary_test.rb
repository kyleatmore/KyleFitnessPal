# == Schema Information
#
# Table name: exercise_diaries
#
#  id         :integer          not null, primary key
#  date       :date             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ExerciseDiaryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

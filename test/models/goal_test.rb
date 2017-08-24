# == Schema Information
#
# Table name: goals
#
#  id               :integer          not null, primary key
#  current_weight   :integer          not null
#  goal_weight      :integer          not null
#  activity_level   :integer          not null
#  goal_description :integer          not null
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class GoalTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

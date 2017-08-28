class ChangeServingsToFloat < ActiveRecord::Migration[5.0]
  def change
    change_column(:food_loggings, :servings, :float, null: false)
  end
end

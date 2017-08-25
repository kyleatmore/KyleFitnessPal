class CreateFoodLoggings < ActiveRecord::Migration[5.0]
  def change
    create_table :food_loggings do |t|
      t.integer :servings, null: false
      t.string :meal, null: false
      t.integer :food_id, null: false
      t.integer :food_diary_id, null: false
      t.timestamps
    end

    add_index :food_loggings, :food_id
    add_index :food_loggings, :food_diary_id
  end
end

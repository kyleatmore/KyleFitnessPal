class CreateGoals < ActiveRecord::Migration[5.0]
  def change
    create_table :goals do |t|
      t.integer :current_weight, null: false
      t.integer :goal_weight, null: false
      t.integer :activity_level, null: false
      t.integer :goal_description, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :goals, :user_id
  end
end

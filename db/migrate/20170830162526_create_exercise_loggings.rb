class CreateExerciseLoggings < ActiveRecord::Migration[5.0]
  def change
    create_table :exercise_loggings do |t|
      t.integer :minutes, null: false
      t.integer :exercise_id, null: false
      t.integer :exercise_diary_id, null: false
      t.timestamps
    end

    add_index :exercise_loggings, :exercise_id
    add_index :exercise_loggings, :exercise_diary_id
  end
end

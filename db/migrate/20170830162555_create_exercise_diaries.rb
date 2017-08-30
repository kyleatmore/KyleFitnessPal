class CreateExerciseDiaries < ActiveRecord::Migration[5.0]
  def change
    create_table :exercise_diaries do |t|
      t.date :date, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :exercise_diaries, [:user_id, :date], unique: true
  end
end

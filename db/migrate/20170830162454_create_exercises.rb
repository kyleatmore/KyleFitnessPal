class CreateExercises < ActiveRecord::Migration[5.0]
  def change
    create_table :exercises do |t|
      t.string :name, null: false
      t.integer :cals_burned_per_min, null: false
      t.timestamps
    end
  end
end

class CreateFoods < ActiveRecord::Migration[5.0]
  def change
    create_table :foods do |t|
      t.string :brand, null: false
      t.string :name, null: false
      t.integer :calories, null: false
      t.integer :carbohydrates, null: false
      t.integer :protein, null: false
      t.integer :fats, null: false
      t.string :serving_size, null: false
      t.timestamps
    end
  end
end

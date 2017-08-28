# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170828181901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "food_diaries", force: :cascade do |t|
    t.date     "date",       null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "date"], name: "index_food_diaries_on_user_id_and_date", unique: true, using: :btree
  end

  create_table "food_loggings", force: :cascade do |t|
    t.float    "servings",      null: false
    t.string   "meal",          null: false
    t.integer  "food_id",       null: false
    t.integer  "food_diary_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["food_diary_id"], name: "index_food_loggings_on_food_diary_id", using: :btree
    t.index ["food_id"], name: "index_food_loggings_on_food_id", using: :btree
  end

  create_table "foods", force: :cascade do |t|
    t.string   "brand",         null: false
    t.string   "name",          null: false
    t.integer  "calories",      null: false
    t.integer  "carbohydrates", null: false
    t.integer  "protein",       null: false
    t.integer  "fats",          null: false
    t.string   "serving_size",  null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "goals", force: :cascade do |t|
    t.integer  "current_weight",   null: false
    t.integer  "goal_weight",      null: false
    t.integer  "activity_level",   null: false
    t.integer  "goal_description", null: false
    t.integer  "user_id",          null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["user_id"], name: "index_goals_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.integer  "height",          null: false
    t.string   "gender",          null: false
    t.date     "birth_date",      null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end

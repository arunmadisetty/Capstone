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

ActiveRecord::Schema.define(version: 20170817004820) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.string "url"
    t.integer "school_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "real_estate_data", force: :cascade do |t|
    t.string "neighborhood"
    t.integer "avg_home_price"
    t.integer "avg_rent"
    t.integer "crime"
    t.integer "median_age"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "saved_searches", force: :cascade do |t|
    t.integer "user_id"
    t.integer "school_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.integer "real_estate_datum_id"
    t.string "address"
    t.string "level"
    t.string "tier_rank"
    t.integer "total_size"
    t.integer "grad_rate"
    t.integer "act_scores"
    t.string "gifted_program"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

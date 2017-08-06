class CreateRealEstateData < ActiveRecord::Migration[5.1]
  def change
    create_table :real_estate_data do |t|
      t.string :neighborhood
      t.integer :avg_home_price
      t.integer :avg_rent
      t.integer :crime
      t.integer :median_age

      t.timestamps
    end
  end
end

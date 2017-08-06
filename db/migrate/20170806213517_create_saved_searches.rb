class CreateSavedSearches < ActiveRecord::Migration[5.1]
  def change
    create_table :saved_searches do |t|
      t.integer :user_id
      t.integer :school_id

      t.timestamps
    end
  end
end

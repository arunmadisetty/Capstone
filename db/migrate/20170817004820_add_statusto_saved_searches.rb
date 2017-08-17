class AddStatustoSavedSearches < ActiveRecord::Migration[5.1]
  def change
    add_column :saved_searches, :status, :string
  end
end

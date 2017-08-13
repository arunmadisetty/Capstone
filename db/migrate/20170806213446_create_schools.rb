class CreateSchools < ActiveRecord::Migration[5.1]
  def change
    create_table :schools do |t|
      t.string :name
      t.integer :real_estate_datum_id
      t.string :address
      t.string :level
      t.string :tier_rank
      t.integer :total_size
      t.integer :grad_rate
      t.integer :act_scores
      t.string :gifted_program

      t.timestamps
    end
  end
end

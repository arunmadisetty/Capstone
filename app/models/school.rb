class School < ApplicationRecord
  has_many :images
  has_many :saved_searches
  belongs_to :real_estate_datum
end

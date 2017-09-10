class School < ApplicationRecord
  has_many :images
  belongs_to :real_estate_datum
end

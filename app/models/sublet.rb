class Sublet < ApplicationRecord
  belongs_to :owner, class_name: "User"
  has_many :images
  has_one :location
end

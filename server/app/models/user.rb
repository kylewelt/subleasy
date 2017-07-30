class User < ApplicationRecord
  has_secure_password
  has_many :listings, class_name: "Sublet", foreign_key: "owner_id"
end

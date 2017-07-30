class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :id, :email
  has_many :listings
end

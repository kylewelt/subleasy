class SubletSerializer < ActiveModel::Serializer
  attributes :name, :price, :start_date, :end_date, :created_at, :owner_id, :id, :description
  has_one :location
  has_many :images
end

class SubletSerializer < ActiveModel::Serializer
  attributes :name, :price, :start_date, :end_date
  belongs_to :owner
  belongs_to :location
end

class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.decimal :long
      t.decimal :lat
      t.references :sublet, foreign_key: true

      t.timestamps
    end
  end
end

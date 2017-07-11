class CreateSublets < ActiveRecord::Migration[5.1]
  def change
    create_table :sublets do |t|
      t.string :name
      t.references :owner, references: :users
      t.integer :price
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end

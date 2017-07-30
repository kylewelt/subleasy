class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.string :url
      t.string :caption
      t.references :sublet, foreign_key: true
      t.timestamps
    end
  end
end

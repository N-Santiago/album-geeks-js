class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :artist
      t.string :front_url
      t.string :back_url
      t.string :genre
      t.string :condition
      t.string :description
      t.integer :price
      t.integer :category_id

      t.timestamps
    end
  end
end

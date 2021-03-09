class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :artist
      t.string :format
      t.string :condition
      t.string :description
      t.integer :price
      t.integer :genre_id

      t.timestamps
    end
  end
end

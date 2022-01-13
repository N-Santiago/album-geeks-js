class AddImgToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :img, :string
  end
end

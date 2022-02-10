class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :genre, :condition, :description, :price, :category_name, :image_url, :video_url, :category_id

end

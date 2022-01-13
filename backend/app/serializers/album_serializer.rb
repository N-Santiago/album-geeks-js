class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :genre, :condition, :description, :price, :category_name, :img, :category_id 
end

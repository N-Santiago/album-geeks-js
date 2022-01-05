class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :genre, :condition, :description, :price, :category_name, :category_id 
end

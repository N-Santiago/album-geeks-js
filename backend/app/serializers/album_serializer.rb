class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :genre, :condition, :description, :price
end

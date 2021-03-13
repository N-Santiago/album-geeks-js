class AlbumSerializer < ActiveModel::Serializer
  attributes :name, :artist, :genre, :condition, :description, :price
end

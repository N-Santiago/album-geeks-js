class AlbumSerializer < ActiveModel::Serializer
  attributes :name, :artist, :format, :condition, :description, :price, :genre_id
end

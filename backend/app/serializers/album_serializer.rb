class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :genre, :condition, :description, :price, :category_name, :front_url, :back_url, :category_id

end

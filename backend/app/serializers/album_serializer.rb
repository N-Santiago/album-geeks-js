class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :image_format, :genre, :condition, :description, :price, :category_name, :category_id 

  def image_format
    return unless object.image.attached?

    object.image.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: object.image_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end
end

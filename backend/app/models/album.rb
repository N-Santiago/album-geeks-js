class Album < ApplicationRecord
    belongs_to :category, optional: true 
    has_one_attached :image
    include Rails.application.routes.url_helpers

    def category_name
        self.category ? self.category.name : "Not assigned" 
    end 

    def image_url
        url_for(self.image)
    end

end

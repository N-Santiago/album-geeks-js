class Album < ApplicationRecord
    belongs_to :category, optional: true 
    has_one_attached :img 

    def category_name
        self.category ? self.category.name : "Not assigned" 
    end
end

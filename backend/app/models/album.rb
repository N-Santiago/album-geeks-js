class Album < ApplicationRecord
    belongs_to :category 
    validates :name, :artist, presence: true, length: { in: 3..35, too_long: "%{count} characters is the minimum and maximum allowed" }
    validates :description, length: { maximum: 35, too_long: "%{count} characters is the maximum allowed" }
    validates :price, presence: true

    def category_name
        self.category ? self.category.name : "Not assigned" 
    end
end

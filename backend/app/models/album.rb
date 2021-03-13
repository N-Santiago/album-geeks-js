class Album < ApplicationRecord
    belongs_to :category, optional: true 


end

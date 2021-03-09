class Album < ApplicationRecord
    belongs_to :genre 

    def genre_name
        self.genre.name
    end 
end

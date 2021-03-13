require 'pry'
class AlbumsController < ApplicationController
    def index 
        albums = Album.all
        render json: albums 
    end 

    def show
        album = Album.find(params[:id])
        render json: album
    end 

    def create
        # binding.pry
        album = Album.new(album_params)
        if album.save
          render json: album
        else
            render json: album, status: 500
        end
    end

    private

    def album_params
        params.require(:album).permit(:name, :artist, :format, :condition, :description, :price, :genre_id)
    end
    
end

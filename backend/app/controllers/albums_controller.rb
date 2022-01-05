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
        album = Album.new(album_params)
        if album.save
          render json: album
        else
            render json: {
                error: "Album cannot be created",
                status: 500
            } 
        end
    end

    def destroy
        album = Album.find(params[:id])

        if album.destroy
            render json: { id: album.id }
        end
    end 

    private

    def album_params
        params.require(:album).permit(:name, :artist, :genre, :condition, :description, :price, :category_id)
    end
    
end

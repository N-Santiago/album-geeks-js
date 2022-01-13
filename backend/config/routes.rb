Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :albums, only: [:index, :show, :create, :destroy]
 post '/img' => 'albums#img'
  resources :categories, only: [:index]
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "/" => "pages#home"

  get "/" => "schools#index"
  # get "/new" => "schools#new"
  # post "/" => "schools#create"
  get "/:id" => "schools#show"
  # get "/:id/edit" => "schools#edit"
  # patch "/:id" => "schools#update"
  # delete "/:id" => "schools#destroy"

  get "/signup" => "users#new"  
  post "/users" => "users#create"

  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  get "/logout" => "sessions#destroy"

  get "/savedsearch" => "savedsearches#index"
  post "/savedsearch" => "savedsearches#create"
  get "/savedsearch/:id" => "savedsearches#show"
  
end

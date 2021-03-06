Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'schools' => "schools#index"
    end
  end

  namespace :api do
    namespace :v1 do
      get 'schools/:id' => "schools#show"
    end
  end

  namespace :api do
    namespace :v1 do
      get "savedsearch" => "saved_searches#index"
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get "/" => "pages#home"

  get "/schools" => "schools#index"
  # get "/new" => "schools#new"
  # post "/" => "schools#create"  
  get "/schools/:id" => "schools#show"
  # get "/:id/edit" => "schools#edit"
  # patch "/:id" => "schools#update"
  

  get "/signup" => "users#new"  
  post "/users" => "users#create"

  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  get "/logout" => "sessions#destroy"

  get "/savedsearch" => "saved_searches#index"
  post "/savedsearch" => "saved_searches#create"
  # get "/savedsearch/:id" => "saved_searches#show"
  delete "/savedsearch/:id" => "saved_searches#destroy"
end

Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    post '/users/try', to: 'users#try'
    resource :session, only: [:create, :destroy]
    resources :foods, only: [:index]
    resources :food_diaries, only: [:show]
  end
end

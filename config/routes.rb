Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    post '/users/try', to: 'users#try'
    resource :session, only: [:create, :destroy]
    resources :foods, only: [:index]
  end
end

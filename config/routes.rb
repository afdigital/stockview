Rails.application.routes.draw do
  
  devise_for :users, controllers: { registrations: "user/registrations"}
  resources :user_stocks, except: [:edit, :update, :show]
  resources :users, only: [:show]
  resources :friendships
  get 'search_friends', to: "users#search"
  post 'add_friend', to: "users#add_friend"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'
  get 'my_portfolio', to: "users#my_portfolio"
  get 'search_stocks', to: 'stocks#search'
  get 'my_friends', to: 'users#my_friends'
end

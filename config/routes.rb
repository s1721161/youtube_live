Rails.application.routes.draw do
  get 'auto_play/URL'
  get 'auto_play/index'
  post 'cids' => 'auto_play#create'

  mount ActionCable.server => '/cable'
  
end

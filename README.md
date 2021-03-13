## Basic laravel chat app with pusher and event

### just single chat

composer create-project laravel/laravel7 chat.test

php artisan key:generate

npm install --save vue-chat-scroll

composer require pusher/pusher-php-server "~4.0"

php artisan event:generate

php artisan make:controller Api/ChatController

composer require laravel/ui:^2.4

php artisan ui vue --auth

npm install --save laravel-echo pusher-js

config pusher https://laravel.com/docs/7.x/broadcasting


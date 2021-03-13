<?php

use App\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth')->get('/user/{user_id}', function ($user_id) {
    return User::where('id', $user_id)->get();
});

Route::middleware('auth')->get('getChat', 'Api\ChatController@getChat');
Route::middleware('auth')->post('sendChat', 'Api\ChatController@send');

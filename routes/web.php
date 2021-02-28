<?php

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login','Auth\LoginController@login')->name('login');
Route::post('/logout','Auth\LoginController@logout')->name('logout');
Route::post('/register','Auth\RegisterController@register')->name('register');
Route::post('/password_reset','Auth\ResetPasswordController@reset')->name('password_reset');

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware('auth')->get('/checker', function (Request $request) {
    return new UserResource($request->user());
});

Route::get('/{any?}', function () {
    return view('app');
})->where('any', '^(?!api\/)[\/\w\.-]*');



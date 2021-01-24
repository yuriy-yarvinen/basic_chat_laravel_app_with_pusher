<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/{any?}', function () {
    return view('app');
})->where('any', '^(?!api\/)[\/\w\.-]*');



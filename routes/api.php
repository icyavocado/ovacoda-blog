<?php

use Illuminate\Http\Request;

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

Route::get('blog', 'BlogController@index');
// Route::post('blog', 'BlogController@store');
// Route::get('blog/{id}', 'BlogController@show');
// Route::put('blog/{id}', 'BlogController@update');
// Route::post('blog/{id}/{id}', 'ArticleController@store');
// Route::put('blog/{id}/{id}', 'ArticleController@update');

Route::middleware('auth:api')->get('/blog-admin', function (Request $request) {
    return $request->user();
});

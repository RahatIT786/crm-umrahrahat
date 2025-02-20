<?php

use App\Http\Controllers\PackageController;

use App\Http\Controllers\staff_management\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/api/packages', [PackageController::class, 'index']);

Route::post('/api/city',[PackageController::class,'store']);

Route::post('/api/createrole',[RoleController::class,'createRole']);

Route::middleware('api.key')->post('/departure-city',
    function(Request $request){
    return response()->json(['cityname' => $request->cityname]);
});

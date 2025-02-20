<?php

use App\Http\Controllers\PackageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\company_management\BranchController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/api/packages', [PackageController::class, 'index']);

Route::post('/api/departure-city',[PackageController::class,'store']);
Route::post('/api/company-management/branches',[BranchController::class,'createBranch']);

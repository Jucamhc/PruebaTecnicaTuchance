<?php

use App\Http\Controllers\AlumnoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware('auth.apikey')->group(function () {
    Route::post('/crear-alumno', [AlumnoController::class, 'store']);
    Route::get('/consultar-alumno/{idGrado}', [AlumnoController::class, 'index']);
});

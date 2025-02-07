<?php

use App\Http\Controllers\AlumnoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Ruta para registrar un usuario de prueba
Route::get('/setup-user', function () {

    try {
        $password = '12345679';
        $user = User::create([
            'name' => 'Prueba Técnica',
            'email' => 'pruebaTecnica@tuchance.com',
            'password' => Hash::make($password),
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Usuario creado',
            'password' => $password,
            'api_token' => $token
        ]);
    } catch (\Throwable $th) {
        return response()->json([
            'error' => 'Ocurrió un error inesperado',
            'detalle' => [
                'msg' => 'El usuario ya exite',
                'email' => 'pruebaTecnica@tuchance.com',
                'password' => $password
            ]
        ], 501);
    }
});

Route::post('/login', function (Request $request) {
    $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => 'required|min:8',
    ]);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['error' => 'Credenciales incorrectas'], 401);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json(['message' => 'Login exitoso', 'api_token' => $token]);
});

Route::middleware(['auth:sanctum', 'throttle:60,1'])->group(function () {
    Route::post('/crear-alumno', [AlumnoController::class, 'store']);
    Route::get('/consultar-alumno', [AlumnoController::class, 'index']);
});



Route::fallback(function () {
    return response()->json(['message' => 'Ruta no encontrada o acceso no autorizado.'], 404);
});

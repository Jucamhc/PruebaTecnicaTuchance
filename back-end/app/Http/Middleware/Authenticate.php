<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null :  response()->json([
            'error' => 'No autenticado',
            'message' => 'Debes iniciar sesión para acceder a esta ruta'
        ], 401);
    }
}

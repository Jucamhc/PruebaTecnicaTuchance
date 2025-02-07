<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {
        // Error 401 - No autenticado
        if ($exception instanceof AuthenticationException) {
            return response()->json([
                'error' => 'No autenticado',
                'message' => 'Debes iniciar sesión para acceder a esta ruta'
            ], 401);
        }

        // Error 403 - Sin permisos
        if ($exception instanceof AccessDeniedHttpException) {
            return response()->json([
                'error' => 'Acceso denegado',
                'message' => 'No tienes permiso para acceder a esta ruta'
            ], 403);
        }

        // Error 404 - Ruta no encontrada
        if ($exception instanceof \Symfony\Component\HttpKernel\Exception\NotFoundHttpException) {
            return response()->json([
                'error' => 'Ruta no encontrada',
                'message' => 'La ruta que intentas acceder no existe.'
            ], 404);
        }

        return parent::render($request, $exception);
    }
}

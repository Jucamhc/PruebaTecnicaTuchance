<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AlumnoController extends Controller
{
    public function store(Request $request)
    {

        $rules = [
            'nombre' => 'required|string',
            'fecha_nacimiento' => 'required|date_format:d/m/Y',
            'nombre_padre' => 'required|string',
            'nombre_madre' => 'required|string',
            'grado' => 'required|string',
            'seccion' => 'required|string',
            'fecha_ingreso' => 'required|date_format:d/m/Y',
        ];

        $messages = [
            'required' => 'El campo :attribute es obligatorio.',
            'string' => 'El campo :attribute debe ser una cadena de texto.',
            'date' => 'El campo :attribute debe ser una fecha válida.',
        ];

        // Validar la solicitud
        $validator = Validator::make($request->all(), $rules, $messages);

        // Si la validación falla
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Errores de validación',
                'errors' => $validator->errors()
            ], 422);
        }

        // Convertir fechas
        $data = $request->all();
        $data['fecha_nacimiento'] = Carbon::createFromFormat('d/m/Y', $request->fecha_nacimiento)->format('Y-m-d');
        $data['fecha_ingreso'] = Carbon::createFromFormat('d/m/Y', $request->fecha_ingreso)->format('Y-m-d');

        // Guardar el alumno
        $alumno = Alumno::create($data);

        return response()->json([
            'message' => 'Alumno registrado exitosamente',
            'alumno' => $alumno
        ], 201);
    }

    public function index(Request $request)
    {
        $query = Alumno::query();

        if ($request->has('alumno')) {
            $query->where('id', $request->query('alumno'));
        }

        if ($request->has('grado')) {
            $query->where('grado', $request->query('grado'));
        }

        $alumnos = $query->get();

        return response()->json($alumnos);
    }
}

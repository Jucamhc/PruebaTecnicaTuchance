<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use Illuminate\Http\Request;

class AlumnoController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string',
            'fecha_nacimiento' => 'required|date',
            'nombre_padre' => 'required|string',
            'nombre_madre' => 'required|string',
            'grado' => 'required|string',
            'seccion' => 'required|string',
            'fecha_ingreso' => 'required|date',
        ]);

        $alumno = Alumno::create($request->all());

        return response()->json($alumno, 201);
    }

    public function index($idGrado)
    {
        $alumnos = Alumno::where('grado', $idGrado)->get();
        return response()->json($alumnos);
    }
}

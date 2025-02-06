<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    use HasFactory;

    protected $table = 'alumnos';

    protected $fillable = [
        'nombre',
        'fecha_nacimiento',
        'nombre_padre',
        'nombre_madre',
        'grado',
        'seccion',
        'fecha_ingreso',
    ];

    public $timestamps = true;
}

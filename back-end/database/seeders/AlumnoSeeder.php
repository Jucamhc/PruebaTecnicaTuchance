<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Alumno;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class AlumnoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('alumnos')->delete();

        $faker = Faker::create();

        $alumnos = [];

        for ($i = 0; $i < 50; $i++) {
            $alumnos[] = [
                'nombre' => $faker->firstName . ' ' . $faker->lastName,
                'fecha_nacimiento' => $faker->date('Y-m-d', '2015-12-31'),
                'nombre_padre' => $faker->firstName . ' ' . $faker->lastName,
                'nombre_madre' => $faker->firstName . ' ' . $faker->lastName,
                'grado' => $faker->randomElement(['1', '2', '3', '4', '5']),
                'seccion' => $faker->randomElement(['A', 'B', 'C']),
                'fecha_ingreso' => $faker->date('Y-m-d', 'now'),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        Alumno::insert($alumnos);
    }
}

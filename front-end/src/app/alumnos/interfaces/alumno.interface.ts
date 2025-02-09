export interface Alumno {
  id: number;
  nombre: string;
  fecha_nacimiento: Date;
  nombre_padre: string;
  nombre_madre: string;
  grado: Grado;
  seccion: Seccion;
  fecha_ingreso: Date;
  created_at: Date;
  updated_at: Date;
  img?: string;
}

export enum Seccion {
  A = "A",
  B = "B",
  C = "C",
}

export enum Grado {
  Uno = "1",
  Dos = "2",
  Tres = "3",
  Cuatro = "4",
  Cinco = "5"
}


export interface Alumno {
  id:               number;
  nombre:           string;
  fecha_nacimiento: Date;
  nombre_padre:     string;
  nombre_madre:     string;
  grado:            string;
  seccion:          Seccion;
  fecha_ingreso:    Date;
  created_at:       Date;
  updated_at:       Date;
}

export enum Seccion {
  A = "A",
  B = "B",
  C = "C",
}

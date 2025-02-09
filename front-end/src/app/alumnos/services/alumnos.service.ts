import { Injectable } from '@angular/core';
import { enviroments } from '../../../environments/enviroments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({ providedIn: 'root' })
export class AlumnosService {
  private baseUrl: string = enviroments.baseUrl;
  private token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Alumno[]>(`${this.baseUrl}/consultar-alumno`, { headers });
  }

  getAlumnosOrGroupById(id: string, tipo: string): Observable<Alumno | Alumno[] | undefined> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Alumno | Alumno[]>(`${this.baseUrl}/consultar-alumno?${tipo}=${id}`, { headers })
      .pipe(
        catchError(error => of(undefined))
      )
  }

  formatDateToDMY(date: Date | string): string {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const formData = new FormData();
    formData.append("nombre", alumno.nombre);
    formData.append("fecha_nacimiento", this.formatDateToDMY(alumno.fecha_nacimiento));
    formData.append("nombre_padre", alumno.nombre_padre);
    formData.append("nombre_madre", alumno.nombre_madre);
    formData.append("grado", alumno.grado.toString()); // 👈 Asegurar que es string
    formData.append("seccion", alumno.seccion);
    formData.append("fecha_ingreso", this.formatDateToDMY(alumno.fecha_ingreso));

    return this.http.post<Alumno>(`${this.baseUrl}/crear-alumno`, formData, { headers });
  }


}

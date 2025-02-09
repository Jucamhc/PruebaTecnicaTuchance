import { Injectable } from '@angular/core';
import { enviroments } from '../../../environments/enviroments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({providedIn: 'root'})
export class AlumnosService {
  private baseUrl:string = enviroments.baseUrl;
  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
/*     const token = localStorage.getItem('token');
 */    const token = '1|T2pzObvSGpWUMgo6FORoDzYBsussTZJCmCYQ6u6a01310dcd';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Alumno[]>(`${this.baseUrl}/consultar-alumno`, { headers });
  }

}

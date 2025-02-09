import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroments } from '../../../environments/enviroments';
import { Register, User } from '../interface/user.interface';
import { Observable, tap, of, map, catchError } from 'rxjs';
import { Alumno } from '../../alumnos/interfaces/alumno.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private baseUrl = enviroments.baseUrl;
  private user?: User;
  private alumnos?: Alumno[]

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined
    return structuredClone(this.user)
  }

  register(): Observable<Register> {
    return this.http.get<Register>(`${this.baseUrl}/setup-user`)
  }

  login(email: string, password: string): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = JSON.stringify({ email, password });
    return this.http.post<User>(`${this.baseUrl}/login`, body, { headers })
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token', user.api_token)
        )
      )
  }

  chechAuthentication(): Observable<boolean> {

    if (!localStorage.getItem('token')) return of(false)
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Alumno[]>(`${this.baseUrl}/consultar-alumno`, { headers })
      .pipe(
        tap(alumnos => this.alumnos),
        map(alumnos => !!alumnos),
        catchError(err => of(false))
      )
  }

  logout() {
    this.user = undefined;
    localStorage.clear()
  }

}

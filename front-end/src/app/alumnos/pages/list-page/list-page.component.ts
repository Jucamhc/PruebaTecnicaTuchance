import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../interfaces/alumno.interface';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-list-page',
  standalone: false,
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  public loading = true;
  public alumnos: Alumno[] = [];
  public gradoFiltro: string = '';
  public seccionFiltro: string = '';

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.alumnosService.getAlumnos()
      .subscribe(alumnos => { this.alumnos = alumnos, this.loading = false })
  }


  getAlumnosFiltrados(): Alumno[] {
    return this.alumnos.filter(alumno => {
      const filtroGrado = this.gradoFiltro ? Number(alumno.grado) === Number(this.gradoFiltro) : true;
      const filtroSeccion = this.seccionFiltro ? alumno.seccion === this.seccionFiltro : true;
      return filtroGrado && filtroSeccion;
    });
  }
}

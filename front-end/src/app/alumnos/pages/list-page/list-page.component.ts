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

  public alumnos: Alumno[] = [];
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit(): void {
    this.alumnosService.getAlumnos()
      .subscribe(alumnos => this.alumnos = alumnos)
  }



}

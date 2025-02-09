import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../interfaces/alumno.interface';
import { AlumnosService } from '../../services/alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-alumno-page',
  standalone: false,
  templateUrl: './alumno-page.component.html',
  styles: ``
})
export class AlumnoPageComponent implements OnInit {

  public alumno?: Alumno;

  constructor(
    private alumnosService: AlumnosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.alumnosService.getAlumnosOrGroupById(id, 'alumno'))
      ).subscribe(alumno => {
        if (!alumno) return this.router.navigate(['/heroes/list'])

        this.alumno = Array.isArray(alumno) ? alumno[0] : alumno;
        return;
      })
  }

  goBack(): void {
    this.router.navigateByUrl('alumnos/list')
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../../services/alumnos.service';
import { Router } from '@angular/router';
import { Grado, Seccion } from '../../interfaces/alumno.interface';

@Component({
  selector: 'app-new-page',
  standalone: false,
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent  implements OnInit {

  public loading = false;
  public form!: FormGroup;

  secciones = Object.values(Seccion);
  grados = Object.values(Grado);

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fecha_nacimiento: ['', Validators.required],
      nombre_padre: ['', [Validators.required, Validators.minLength(3)]],
      nombre_madre: ['', [Validators.required, Validators.minLength(3)]],
      grado: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      seccion: ['', Validators.required],
      fecha_ingreso: ['', Validators.required]
    });
  }

  guardarAlumno() {
    if (this.form.invalid) return;

    this.loading = true;
    this.alumnosService.createAlumno(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/alumnos/list']);
      },
      error: () => {
        this.loading = false;
        alert('Error al guardar el alumno');
      }
    });
  }

}

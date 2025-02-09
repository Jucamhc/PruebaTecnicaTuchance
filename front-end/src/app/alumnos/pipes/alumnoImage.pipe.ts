import { Pipe, type PipeTransform } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';

@Pipe({
  name: 'alumnoImage',
  standalone: false
})
export class AlumnoImagePipe implements PipeTransform {

  transform(alumno: Alumno): string {

    if (!alumno.img) {
      return 'assets/no-image.png'
    }
    console.log(alumno);

    if (alumno.img) return alumno.img

    return `assets/alumnos/${alumno.id}.jpg`


  }

}

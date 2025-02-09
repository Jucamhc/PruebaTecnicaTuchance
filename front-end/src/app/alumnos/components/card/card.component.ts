import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Alumno } from '../../interfaces/alumno.interface';

@Component({
  selector: 'alumnos-hero-card',
  templateUrl:'./card.component.html',
  standalone:false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  @Input()
  public alumno!: Alumno

  ngOnInit(): void {
    if (!this.alumno) throw Error('Alumno property is required')
  }
 }

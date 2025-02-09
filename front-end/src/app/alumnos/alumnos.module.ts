import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AlumnoPageComponent } from './pages/alumno-page/alumno-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { AlumnoImagePipe } from './pipes/alumnoImage.pipe';


@NgModule({
  declarations: [
    LayoutPageComponent,
    NewPageComponent,
    ListPageComponent,
    AlumnoPageComponent,
    SearchPageComponent,
    CardComponent,
    AlumnoImagePipe
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule
  ]
})
export class AlumnosModule { }

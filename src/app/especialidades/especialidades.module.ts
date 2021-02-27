import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadesListComponent } from './especialidades-list.component';
import { EspecialidadesDetailComponent } from './especialidades-detail.component';



@NgModule({
  declarations: [EspecialidadesListComponent, EspecialidadesDetailComponent],
  imports: [
    CommonModule
  ]
})
export class EspecialidadesModule { }

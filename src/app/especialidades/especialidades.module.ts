import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadesListComponent } from './especialidades-list.component';
import { EspecialidadesDetailComponent } from './especialidades-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EspecialidadesListComponent, EspecialidadesDetailComponent],
  imports: [
    RouterModule.forChild([
      { path: 'especialidades', component: EspecialidadesListComponent },
      {
        path: 'especialidades/:id',
        // canActivate: [EspecialidadesDetailGuard],
        component: EspecialidadesDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class EspecialidadesModule { }

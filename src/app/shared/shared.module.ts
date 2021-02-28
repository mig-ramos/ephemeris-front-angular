import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableComponent
  ]
})
export class SharedModule { }

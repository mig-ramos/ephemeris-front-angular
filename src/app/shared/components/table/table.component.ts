import { Component, Input, OnInit } from '@angular/core';
import { TableConfig } from './table-config.model';

@Component({
  selector: 'ephemeris-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()
  dados: any[] = []

  @Input()
  config: TableConfig<any> | undefined

  constructor() { }

  ngOnInit(): void {
  }

  colunaAcoes(){
    return this.config?.editableRow || this.config?.deletableRow
  }

  editableRowClick(row: any){
    this.config?.editableRowClick ? this.config.editableRowClick(row) : null
  }

  deletableRowClick(row: any){
    this.config?.deletableRowClick ? this.config.deletableRowClick(row) : null
  }

  addButtonClick(){
    this.config?.addButtonClick ? this.config.addButtonClick : null
  }
}

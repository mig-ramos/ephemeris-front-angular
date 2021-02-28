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
  config: TableConfig[] = []

  constructor() { }

  ngOnInit(): void {
  }

}

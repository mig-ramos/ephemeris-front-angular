import { Component, OnInit } from '@angular/core';
import { TableConfig } from '../shared/components/table/table-config.model';
import { Especialidade } from '../shared/models/especialidade.model';

@Component({
  selector: 'ephemeris-especialidades-list',
  templateUrl: './especialidades-list.component.html',
  styleUrls: ['./especialidades-list.component.scss']
})
export class EspecialidadesListComponent implements OnInit {

  lista: Especialidade[] = [
    { id: 1, nome: 'Dentista' },
    { id: 2, nome: 'Médico Geral' },
    { id: 3, nome: 'Cardiologista' },
  ]

  configTable: TableConfig<Especialidade> = {
    cols: [
      {
        column: 'ID',
        property: 'id'
      },
      {
        column: 'Nome',
        property: 'nome'
      },
    ],
    editableRow: true,
    deletableRow: true,
    addButton: true,
    editableRowClick: (row: Especialidade) => this.editarEspecialidade(row),
    deletableRowClick: (row: Especialidade) => this.deletarEspecialidade(row),
    addButtonClick: () => this.adicionarEspecialidade()
  }

  editarEspecialidade(row: Especialidade){
    console.log(row)
  }

  deletarEspecialidade(row: Especialidade){
    console.log(row)
  }

  adicionarEspecialidade(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}

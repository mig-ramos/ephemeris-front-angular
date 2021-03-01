import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ephemeris-especialidades-detail',
  templateUrl: './especialidades-detail.component.html',
  styleUrls: ['./especialidades-detail.component.scss']
})
export class EspecialidadesDetailComponent implements OnInit {

  id: string | null = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id')
    this.id = param
    if (param) {
      const id = +param;
      // this.getProduct(id);
    }
  }

}

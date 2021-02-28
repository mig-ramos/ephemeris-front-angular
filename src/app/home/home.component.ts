import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ephemeris-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pageTitle = 'Bem vindo ao Ephemeris!';

  constructor() { }

  ngOnInit(): void {
  }

}

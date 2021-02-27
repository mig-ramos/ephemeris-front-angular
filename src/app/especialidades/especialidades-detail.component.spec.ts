import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesDetailComponent } from './especialidades-detail.component';

describe('EspecialidadesDetailComponent', () => {
  let component: EspecialidadesDetailComponent;
  let fixture: ComponentFixture<EspecialidadesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

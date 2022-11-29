import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadesrenalesComponent } from './enfermedadesrenales.component';

describe('EnfermedadesrenalesComponent', () => {
  let component: EnfermedadesrenalesComponent;
  let fixture: ComponentFixture<EnfermedadesrenalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermedadesrenalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfermedadesrenalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

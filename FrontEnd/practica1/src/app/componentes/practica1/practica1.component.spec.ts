import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRACTICA1Component } from './practica1.component';

describe('PRACTICA1Component', () => {
  let component: PRACTICA1Component;
  let fixture: ComponentFixture<PRACTICA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRACTICA1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRACTICA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

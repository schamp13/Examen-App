import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenLecturaComponent } from './examen-lectura.component';

describe('ExamenLecturaComponent', () => {
  let component: ExamenLecturaComponent;
  let fixture: ComponentFixture<ExamenLecturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenLecturaComponent]
    });
    fixture = TestBed.createComponent(ExamenLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

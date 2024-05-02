import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenGramaticaComponent } from './examen-gramatica.component';

describe('ExamenGramaticaComponent', () => {
  let component: ExamenGramaticaComponent;
  let fixture: ComponentFixture<ExamenGramaticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenGramaticaComponent]
    });
    fixture = TestBed.createComponent(ExamenGramaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

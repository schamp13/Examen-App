import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoScreenComponent } from './resultado-screen.component';

describe('ResultadoScreenComponent', () => {
  let component: ResultadoScreenComponent;
  let fixture: ComponentFixture<ResultadoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoScreenComponent]
    });
    fixture = TestBed.createComponent(ResultadoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

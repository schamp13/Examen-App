import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenScreenComponent } from './examen-screen.component';

describe('ExamenScreenComponent', () => {
  let component: ExamenScreenComponent;
  let fixture: ComponentFixture<ExamenScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenScreenComponent]
    });
    fixture = TestBed.createComponent(ExamenScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

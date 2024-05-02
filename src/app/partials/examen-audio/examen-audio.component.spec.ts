import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenAudioComponent } from './examen-audio.component';

describe('ExamenAudioComponent', () => {
  let component: ExamenAudioComponent;
  let fixture: ComponentFixture<ExamenAudioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenAudioComponent]
    });
    fixture = TestBed.createComponent(ExamenAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

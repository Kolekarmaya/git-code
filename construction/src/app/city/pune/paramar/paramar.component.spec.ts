import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamarComponent } from './paramar.component';

describe('ParamarComponent', () => {
  let component: ParamarComponent;
  let fixture: ComponentFixture<ParamarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

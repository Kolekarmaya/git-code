import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantriComponent } from './mantri.component';

describe('MantriComponent', () => {
  let component: MantriComponent;
  let fixture: ComponentFixture<MantriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

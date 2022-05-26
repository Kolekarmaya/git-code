import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RahulComponent } from './rahul.component';

describe('RahulComponent', () => {
  let component: RahulComponent;
  let fixture: ComponentFixture<RahulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RahulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RahulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

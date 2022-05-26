import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeleComponent } from './lele.component';

describe('LeleComponent', () => {
  let component: LeleComponent;
  let fixture: ComponentFixture<LeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

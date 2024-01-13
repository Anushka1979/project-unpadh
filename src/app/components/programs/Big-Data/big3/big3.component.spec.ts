import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big3Component } from './big3.component';

describe('Big3Component', () => {
  let component: Big3Component;
  let fixture: ComponentFixture<Big3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Big3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Big3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

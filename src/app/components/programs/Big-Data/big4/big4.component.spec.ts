import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big4Component } from './big4.component';

describe('Big4Component', () => {
  let component: Big4Component;
  let fixture: ComponentFixture<Big4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Big4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Big4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

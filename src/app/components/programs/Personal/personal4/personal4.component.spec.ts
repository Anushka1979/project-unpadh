import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personal4Component } from './personal4.component';

describe('Personal4Component', () => {
  let component: Personal4Component;
  let fixture: ComponentFixture<Personal4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Personal4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Personal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Health4Component } from './health4.component';

describe('Health4Component', () => {
  let component: Health4Component;
  let fixture: ComponentFixture<Health4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Health4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Health4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

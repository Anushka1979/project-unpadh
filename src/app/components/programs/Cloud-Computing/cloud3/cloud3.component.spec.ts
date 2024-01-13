import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloud3Component } from './cloud3.component';

describe('Cloud3Component', () => {
  let component: Cloud3Component;
  let fixture: ComponentFixture<Cloud3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cloud3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cloud3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

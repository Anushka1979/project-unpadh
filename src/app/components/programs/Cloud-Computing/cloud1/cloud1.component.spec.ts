import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloud1Component } from './cloud1.component';

describe('Cloud1Component', () => {
  let component: Cloud1Component;
  let fixture: ComponentFixture<Cloud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cloud1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cloud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

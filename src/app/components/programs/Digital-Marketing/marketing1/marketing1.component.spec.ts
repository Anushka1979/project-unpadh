import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marketing1Component } from './marketing1.component';

describe('Marketing1Component', () => {
  let component: Marketing1Component;
  let fixture: ComponentFixture<Marketing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marketing1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Marketing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

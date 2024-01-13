import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Software1Component } from './software1.component';

describe('Software1Component', () => {
  let component: Software1Component;
  let fixture: ComponentFixture<Software1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Software1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Software1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

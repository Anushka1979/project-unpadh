import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Software2Component } from './software2.component';

describe('Software2Component', () => {
  let component: Software2Component;
  let fixture: ComponentFixture<Software2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Software2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Software2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

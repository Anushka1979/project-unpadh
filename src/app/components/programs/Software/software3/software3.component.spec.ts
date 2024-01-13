import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Software3Component } from './software3.component';

describe('Software3Component', () => {
  let component: Software3Component;
  let fixture: ComponentFixture<Software3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Software3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Software3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

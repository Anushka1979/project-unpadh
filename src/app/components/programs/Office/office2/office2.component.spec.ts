import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Office2Component } from './office2.component';

describe('Office2Component', () => {
  let component: Office2Component;
  let fixture: ComponentFixture<Office2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Office2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Office2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

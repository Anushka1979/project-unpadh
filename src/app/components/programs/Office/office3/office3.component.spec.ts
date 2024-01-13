import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Office3Component } from './office3.component';

describe('Office3Component', () => {
  let component: Office3Component;
  let fixture: ComponentFixture<Office3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Office3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Office3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

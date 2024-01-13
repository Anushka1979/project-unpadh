import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Software4Component } from './software4.component';

describe('Software4Component', () => {
  let component: Software4Component;
  let fixture: ComponentFixture<Software4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Software4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Software4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

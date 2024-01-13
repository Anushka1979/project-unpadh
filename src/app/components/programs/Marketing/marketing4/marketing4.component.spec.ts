import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marketing4Component } from './marketing4.component';

describe('Marketing4Component', () => {
  let component: Marketing4Component;
  let fixture: ComponentFixture<Marketing4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marketing4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Marketing4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Office4Component } from './office4.component';

describe('Office4Component', () => {
  let component: Office4Component;
  let fixture: ComponentFixture<Office4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Office4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Office4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

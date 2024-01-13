import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Finance4Component } from './finance4.component';

describe('Finance4Component', () => {
  let component: Finance4Component;
  let fixture: ComponentFixture<Finance4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Finance4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Finance4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

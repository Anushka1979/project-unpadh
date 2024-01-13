import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Govt2Component } from './govt2.component';

describe('Govt2Component', () => {
  let component: Govt2Component;
  let fixture: ComponentFixture<Govt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Govt2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Govt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

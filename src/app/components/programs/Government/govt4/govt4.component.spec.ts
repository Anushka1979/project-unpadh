import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Govt4Component } from './govt4.component';

describe('Govt4Component', () => {
  let component: Govt4Component;
  let fixture: ComponentFixture<Govt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Govt4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Govt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyber2Component } from './cyber2.component';

describe('Cyber2Component', () => {
  let component: Cyber2Component;
  let fixture: ComponentFixture<Cyber2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cyber2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cyber2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

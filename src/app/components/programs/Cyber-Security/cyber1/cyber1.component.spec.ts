import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyber1Component } from './cyber1.component';

describe('Cyber1Component', () => {
  let component: Cyber1Component;
  let fixture: ComponentFixture<Cyber1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cyber1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cyber1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

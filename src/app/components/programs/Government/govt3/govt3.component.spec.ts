import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Govt3Component } from './govt3.component';

describe('Govt3Component', () => {
  let component: Govt3Component;
  let fixture: ComponentFixture<Govt3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Govt3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Govt3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

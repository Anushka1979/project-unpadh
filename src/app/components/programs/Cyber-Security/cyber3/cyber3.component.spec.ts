import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyber3Component } from './cyber3.component';

describe('Cyber3Component', () => {
  let component: Cyber3Component;
  let fixture: ComponentFixture<Cyber3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cyber3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cyber3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agile3Component } from './agile3.component';

describe('Agile3Component', () => {
  let component: Agile3Component;
  let fixture: ComponentFixture<Agile3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agile3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Agile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

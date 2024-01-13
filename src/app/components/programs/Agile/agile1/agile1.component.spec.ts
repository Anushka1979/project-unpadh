import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agile1Component } from './agile1.component';

describe('Agile1Component', () => {
  let component: Agile1Component;
  let fixture: ComponentFixture<Agile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agile1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Agile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

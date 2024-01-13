import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifestyle1Component } from './lifestyle1.component';

describe('Lifestyle1Component', () => {
  let component: Lifestyle1Component;
  let fixture: ComponentFixture<Lifestyle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifestyle1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lifestyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

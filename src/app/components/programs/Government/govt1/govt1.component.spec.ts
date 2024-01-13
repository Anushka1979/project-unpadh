import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Govt1Component } from './govt1.component';

describe('Govt1Component', () => {
  let component: Govt1Component;
  let fixture: ComponentFixture<Govt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Govt1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Govt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

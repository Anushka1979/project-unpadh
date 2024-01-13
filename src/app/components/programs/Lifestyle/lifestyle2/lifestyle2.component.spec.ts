import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifestyle2Component } from './lifestyle2.component';

describe('Lifestyle2Component', () => {
  let component: Lifestyle2Component;
  let fixture: ComponentFixture<Lifestyle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifestyle2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lifestyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

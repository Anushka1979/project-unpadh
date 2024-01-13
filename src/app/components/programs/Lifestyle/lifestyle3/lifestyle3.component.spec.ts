import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifestyle3Component } from './lifestyle3.component';

describe('Lifestyle3Component', () => {
  let component: Lifestyle3Component;
  let fixture: ComponentFixture<Lifestyle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifestyle3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lifestyle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

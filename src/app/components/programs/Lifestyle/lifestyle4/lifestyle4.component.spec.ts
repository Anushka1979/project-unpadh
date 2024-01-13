import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifestyle4Component } from './lifestyle4.component';

describe('Lifestyle4Component', () => {
  let component: Lifestyle4Component;
  let fixture: ComponentFixture<Lifestyle4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifestyle4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lifestyle4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

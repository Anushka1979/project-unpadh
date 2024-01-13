import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marketing3Component } from './marketing3.component';

describe('Marketing3Component', () => {
  let component: Marketing3Component;
  let fixture: ComponentFixture<Marketing3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marketing3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Marketing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

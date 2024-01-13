import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teaching1Component } from './teaching1.component';

describe('Teaching1Component', () => {
  let component: Teaching1Component;
  let fixture: ComponentFixture<Teaching1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teaching1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Teaching1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

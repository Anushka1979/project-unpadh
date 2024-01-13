import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teaching3Component } from './teaching3.component';

describe('Teaching3Component', () => {
  let component: Teaching3Component;
  let fixture: ComponentFixture<Teaching3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teaching3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Teaching3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

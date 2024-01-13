import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teaching2Component } from './teaching2.component';

describe('Teaching2Component', () => {
  let component: Teaching2Component;
  let fixture: ComponentFixture<Teaching2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teaching2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Teaching2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

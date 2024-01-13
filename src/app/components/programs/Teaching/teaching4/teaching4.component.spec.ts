import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teaching4Component } from './teaching4.component';

describe('Teaching4Component', () => {
  let component: Teaching4Component;
  let fixture: ComponentFixture<Teaching4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teaching4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Teaching4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

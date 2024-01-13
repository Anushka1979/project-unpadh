import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyber4Component } from './cyber4.component';

describe('Cyber4Component', () => {
  let component: Cyber4Component;
  let fixture: ComponentFixture<Cyber4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cyber4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cyber4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloud4Component } from './cloud4.component';

describe('Cloud4Component', () => {
  let component: Cloud4Component;
  let fixture: ComponentFixture<Cloud4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cloud4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cloud4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

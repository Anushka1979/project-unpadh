import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloud2Component } from './cloud2.component';

describe('Cloud2Component', () => {
  let component: Cloud2Component;
  let fixture: ComponentFixture<Cloud2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cloud2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cloud2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

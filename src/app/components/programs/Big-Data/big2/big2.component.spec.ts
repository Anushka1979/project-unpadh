import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big2Component } from './big2.component';

describe('Big2Component', () => {
  let component: Big2Component;
  let fixture: ComponentFixture<Big2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Big2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Big2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

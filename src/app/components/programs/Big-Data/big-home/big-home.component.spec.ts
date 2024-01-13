import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigHomeComponent } from './big-home.component';

describe('BigHomeComponent', () => {
  let component: BigHomeComponent;
  let fixture: ComponentFixture<BigHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

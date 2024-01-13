import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleHomeComponent } from './lifestyle-home.component';

describe('LifestyleHomeComponent', () => {
  let component: LifestyleHomeComponent;
  let fixture: ComponentFixture<LifestyleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifestyleHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifestyleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

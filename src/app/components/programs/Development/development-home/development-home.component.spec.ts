import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentHomeComponent } from './development-home.component';

describe('DevelopmentHomeComponent', () => {
  let component: DevelopmentHomeComponent;
  let fixture: ComponentFixture<DevelopmentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmentHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

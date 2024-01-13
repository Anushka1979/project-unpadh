import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingHomeComponent } from './teaching-home.component';

describe('TeachingHomeComponent', () => {
  let component: TeachingHomeComponent;
  let fixture: ComponentFixture<TeachingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

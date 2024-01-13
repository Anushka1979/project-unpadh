import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgileHomeComponent } from './agile-home.component';

describe('AgileHomeComponent', () => {
  let component: AgileHomeComponent;
  let fixture: ComponentFixture<AgileHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgileHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

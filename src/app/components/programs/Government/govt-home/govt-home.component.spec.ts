import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtHomeComponent } from './govt-home.component';

describe('GovtHomeComponent', () => {
  let component: GovtHomeComponent;
  let fixture: ComponentFixture<GovtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovtHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

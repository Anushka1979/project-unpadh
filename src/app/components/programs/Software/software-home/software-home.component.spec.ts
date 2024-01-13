import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareHomeComponent } from './software-home.component';

describe('SoftwareHomeComponent', () => {
  let component: SoftwareHomeComponent;
  let fixture: ComponentFixture<SoftwareHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

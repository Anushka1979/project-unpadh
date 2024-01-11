import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1AboutComponent } from './page1-about.component';

describe('Page1AboutComponent', () => {
  let component: Page1AboutComponent;
  let fixture: ComponentFixture<Page1AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page1AboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page1AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

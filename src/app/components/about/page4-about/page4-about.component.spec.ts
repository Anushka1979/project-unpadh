import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4AboutComponent } from './page4-about.component';

describe('Page4AboutComponent', () => {
  let component: Page4AboutComponent;
  let fixture: ComponentFixture<Page4AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page4AboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page4AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

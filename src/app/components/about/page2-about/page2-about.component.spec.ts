import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2AboutComponent } from './page2-about.component';

describe('Page2AboutComponent', () => {
  let component: Page2AboutComponent;
  let fixture: ComponentFixture<Page2AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page2AboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page2AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

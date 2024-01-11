import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3AboutComponent } from './page3-about.component';

describe('Page3AboutComponent', () => {
  let component: Page3AboutComponent;
  let fixture: ComponentFixture<Page3AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page3AboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page3AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

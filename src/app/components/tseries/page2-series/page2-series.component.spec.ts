import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2SeriesComponent } from './page2-series.component';

describe('Page2SeriesComponent', () => {
  let component: Page2SeriesComponent;
  let fixture: ComponentFixture<Page2SeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page2SeriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page2SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

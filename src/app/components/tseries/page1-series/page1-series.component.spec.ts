import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1SeriesComponent } from './page1-series.component';

describe('Page1SeriesComponent', () => {
  let component: Page1SeriesComponent;
  let fixture: ComponentFixture<Page1SeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page1SeriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page1SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

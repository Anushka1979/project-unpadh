import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceHomeComponent } from './science-home.component';

describe('ScienceHomeComponent', () => {
  let component: ScienceHomeComponent;
  let fixture: ComponentFixture<ScienceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScienceHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScienceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

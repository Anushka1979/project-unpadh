import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceHomeComponent } from './data-science-home.component';

describe('DataScienceHomeComponent', () => {
  let component: DataScienceHomeComponent;
  let fixture: ComponentFixture<DataScienceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataScienceHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataScienceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

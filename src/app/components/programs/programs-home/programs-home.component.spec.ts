import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsHomeComponent } from './programs-home.component';

describe('ProgramsHomeComponent', () => {
  let component: ProgramsHomeComponent;
  let fixture: ComponentFixture<ProgramsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

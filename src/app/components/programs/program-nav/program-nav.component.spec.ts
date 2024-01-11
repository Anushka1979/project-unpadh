import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramNavComponent } from './program-nav.component';

describe('ProgramNavComponent', () => {
  let component: ProgramNavComponent;
  let fixture: ComponentFixture<ProgramNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

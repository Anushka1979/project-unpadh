import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photo3Component } from './photo3.component';

describe('Photo3Component', () => {
  let component: Photo3Component;
  let fixture: ComponentFixture<Photo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Photo3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Photo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

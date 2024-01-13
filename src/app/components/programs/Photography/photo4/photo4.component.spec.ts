import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Photo4Component } from './photo4.component';

describe('Photo4Component', () => {
  let component: Photo4Component;
  let fixture: ComponentFixture<Photo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Photo4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Photo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

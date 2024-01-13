import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Music3Component } from './music3.component';

describe('Music3Component', () => {
  let component: Music3Component;
  let fixture: ComponentFixture<Music3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Music3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Music3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

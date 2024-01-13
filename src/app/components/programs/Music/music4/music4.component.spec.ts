import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Music4Component } from './music4.component';

describe('Music4Component', () => {
  let component: Music4Component;
  let fixture: ComponentFixture<Music4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Music4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Music4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

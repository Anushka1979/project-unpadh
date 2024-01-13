import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Music1Component } from './music1.component';

describe('Music1Component', () => {
  let component: Music1Component;
  let fixture: ComponentFixture<Music1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Music1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Music1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

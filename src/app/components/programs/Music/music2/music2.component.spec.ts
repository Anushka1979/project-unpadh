import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Music2Component } from './music2.component';

describe('Music2Component', () => {
  let component: Music2Component;
  let fixture: ComponentFixture<Music2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Music2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Music2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

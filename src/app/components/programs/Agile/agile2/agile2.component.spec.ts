import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agile2Component } from './agile2.component';

describe('Agile2Component', () => {
  let component: Agile2Component;
  let fixture: ComponentFixture<Agile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agile2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Agile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agile4Component } from './agile4.component';

describe('Agile4Component', () => {
  let component: Agile4Component;
  let fixture: ComponentFixture<Agile4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agile4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Agile4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

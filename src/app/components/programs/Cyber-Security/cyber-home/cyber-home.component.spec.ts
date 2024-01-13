import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberHomeComponent } from './cyber-home.component';

describe('CyberHomeComponent', () => {
  let component: CyberHomeComponent;
  let fixture: ComponentFixture<CyberHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

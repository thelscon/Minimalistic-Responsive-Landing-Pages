import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDownComponent } from './the-down.component';

describe('TheDownComponent', () => {
  let component: TheDownComponent;
  let fixture: ComponentFixture<TheDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

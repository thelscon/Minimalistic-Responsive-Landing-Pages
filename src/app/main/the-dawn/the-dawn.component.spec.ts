import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDawnComponent } from './the-dawn.component';

describe('TheDownComponent', () => {
  let component: TheDawnComponent;
  let fixture: ComponentFixture<TheDawnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheDawnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheDawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

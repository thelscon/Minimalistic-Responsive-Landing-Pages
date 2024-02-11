import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrashOrganicProduceComponent } from './frash-organic-produce.component';

describe('FrashOrganicProduceComponent', () => {
  let component: FrashOrganicProduceComponent;
  let fixture: ComponentFixture<FrashOrganicProduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrashOrganicProduceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrashOrganicProduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

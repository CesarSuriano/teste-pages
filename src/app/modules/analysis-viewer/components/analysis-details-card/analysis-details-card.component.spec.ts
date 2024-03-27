import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisDetailsCardComponent } from './analysis-details-card.component';

describe('AnalysisDetailsCardComponent', () => {
  let component: AnalysisDetailsCardComponent;
  let fixture: ComponentFixture<AnalysisDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

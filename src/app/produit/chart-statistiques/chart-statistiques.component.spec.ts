import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatistiquesComponent } from './chart-statistiques.component';

describe('ChartStatistiquesComponent', () => {
  let component: ChartStatistiquesComponent;
  let fixture: ComponentFixture<ChartStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartStatistiquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

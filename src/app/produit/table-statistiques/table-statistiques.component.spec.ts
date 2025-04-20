import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStatistiquesComponent } from './table-statistiques.component';

describe('TableStatistiquesComponent', () => {
  let component: TableStatistiquesComponent;
  let fixture: ComponentFixture<TableStatistiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableStatistiquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableStatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

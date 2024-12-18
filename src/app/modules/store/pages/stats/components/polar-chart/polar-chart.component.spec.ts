import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { PolarChartComponent } from './polar-chart.component';

describe('PolarChartComponent', () => {
  let component: PolarChartComponent;
  let fixture: ComponentFixture<PolarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PolarChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

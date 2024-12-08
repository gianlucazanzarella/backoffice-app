import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IStats } from '../../../../interfaces/stats.interface';

@Component({
  selector: 'app-polar-chart',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './polar-chart.component.html',
  styleUrl: './polar-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolarChartComponent implements OnInit {

  @Input() stats: IStats[];

  polarAreaLegend = true;
  polarAreaChartType: ChartType = 'polarArea';
  polarAreaChartData: ChartData<'polarArea'>;

  constructor() { }

  ngOnInit() {
    this.polarAreaChartData = {
      labels: this.stats.map((el) => el.category),
      datasets: [
        {
          data: this.stats.map((el) => el.numberOfProducts),
          label: 'Number of products',
        }
      ],
    };
  }
}

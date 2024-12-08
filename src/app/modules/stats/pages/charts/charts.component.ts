import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StatsSelector } from '../../state/selectors/stats.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../../../shared/interfaces/store.interface';
import { StatsActions } from '../../state/actions/stats.action';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit {

  stores$: Observable<IStore[]> = this.store.select(StatsSelector.getStores);

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(StatsActions.getStores());
  }

}

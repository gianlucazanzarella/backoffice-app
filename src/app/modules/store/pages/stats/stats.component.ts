import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SkeletonComponent } from "../../../../shared/components/skeleton/skeleton.component";
import { IStats } from '../../interfaces/stats.interface';
import { IStoreData } from '../../interfaces/store.interface';
import { StoresActions } from '../../state/actions/store.action';
import { StoreSelector } from '../../state/selectors/store.selector';
import { PolarChartComponent } from './components/polar-chart/polar-chart.component';

@Component({
  selector: 'app-stats',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    ReactiveFormsModule,
    PolarChartComponent,
    SkeletonComponent
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent implements OnInit, AfterViewInit {

  stats$: Observable<IStats[]> = this.store.select(StoreSelector.getStats);
  statsLoading$: Observable<boolean> = this.store.select(StoreSelector.getStatsLoading);
  store$: Observable<IStoreData | null> = this.store.select(StoreSelector.getStore);
  storeLoading$: Observable<boolean> = this.store.select(StoreSelector.getStoreLoading);

  storeId: string | null = this.route.snapshot.paramMap.get('storeId');

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
    if (this.storeId) {
      this.store.dispatch(StoresActions.getStore({ storeId: this.storeId }));
      this.store.dispatch(StoresActions.getStats({ storeId: this.storeId }));
    }
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoresActions } from '../../state/actions/store.action';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsComponent implements OnInit {

  storeId: string | null = this.route.snapshot.paramMap.get('storeId');


  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.storeId) {
      this.store.dispatch(StoresActions.getStore({ storeId: this.storeId }));
      this.store.dispatch(StoresActions.getStats({ storeId: this.storeId }));
    }
  }

}

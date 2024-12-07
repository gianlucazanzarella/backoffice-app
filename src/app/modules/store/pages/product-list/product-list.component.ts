import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../../interfaces/product.interface';
import { IStore, IStoreData } from '../../interfaces/store.interface';
import { StoresActions } from '../../state/actions/store.action';
import { StoreSelector } from '../../state/selectors/store.selector';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PanelsComponent } from "./components/panels/panels.component";
import { GridComponent } from "./components/grid/grid.component";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    ReactiveFormsModule,
    PanelsComponent,
    GridComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnDestroy {

  products$: Observable<IProduct[]> = this.store.select(StoreSelector.getProducts);
  productsLoading$: Observable<boolean> = this.store.select(StoreSelector.getProductsLoading);
  store$: Observable<IStoreData | null> = this.store.select(StoreSelector.getStore);
  storeLoading$: Observable<boolean> = this.store.select(StoreSelector.getStoreLoading);

  subscriptions: Subscription = new Subscription();
  storeId: string | null = this.route.snapshot.paramMap.get('storeId');
  viewMode: FormControl<string | null> = new FormControl<string>('panels');

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.storeId) {
      this.store.dispatch(StoresActions.getStore({ storeId: this.storeId }));
      this.store.dispatch(StoresActions.getProducts({ storeId: this.storeId }));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

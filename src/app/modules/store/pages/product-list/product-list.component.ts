import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../../interfaces/product.interface';
import { IStoreData } from '../../../../shared/interfaces/store.interface';
import { StoresActions } from '../../state/actions/store.action';
import { StoreSelector } from '../../state/selectors/store.selector';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { GridComponent } from "./components/grid/grid.component";
import { PanelsComponent } from "./components/panels/panels.component";
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';

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
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {

  products$: Observable<IProduct[]> = this.store.select(StoreSelector.getProducts);
  productsLoading$: Observable<boolean> = this.store.select(StoreSelector.getProductsLoading);
  store$: Observable<IStoreData | null> = this.store.select(StoreSelector.getStore);
  storeLoading$: Observable<boolean> = this.store.select(StoreSelector.getStoreLoading);

  subscriptions: Subscription = new Subscription();
  storeId: string | null = this.route.snapshot.paramMap.get('storeId');
  viewMode: FormControl<string | null> = new FormControl<string>('panels');
  deleteDialogRef: MatDialogRef<DeleteDialogComponent, { title: string; }>;
  createDialogRef: MatDialogRef<CreateDialogComponent, any>;

  readonly dialog: MatDialog = inject(MatDialog);

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

  deleteProduct(product: IProduct): void {

    this.deleteDialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: {
        title: product.data.title
      }
    });

    this.deleteDialogRef.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.store.dispatch(StoresActions.deleteProduct({ storeId: this.storeId!, productId: product.id! }));
      }
    });
  }

  openCreateDialog(): void {
    this.createDialogRef = this.dialog.open(CreateDialogComponent, {
      minWidth: '500px',
    });

    this.createDialogRef.afterClosed().subscribe((product: IProduct) => {
      if (product) {
        this.store.dispatch(StoresActions.createProduct({ storeId: this.storeId!, product }));
      }
    });
  }
}

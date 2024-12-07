import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IStore } from '../../interfaces/store.interface';
import { StoresActions } from '../../state/actions/store.action';
import { StoreSelector } from '../../state/selectors/store.selector';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-store-list',
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './store-list.component.html',
  styleUrl: './store-list.component.scss'
})
export class StoreListComponent implements OnInit, OnDestroy {

  stores$: Observable<IStore[]> = this.store.select(StoreSelector.getStores);
  storesLoading$: Observable<boolean> = this.store.select(StoreSelector.getStoresLoading);

  subscriptions: Subscription = new Subscription();
  displayedColumns: string[] = ['name', 'category', 'employees', 'actions'];

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(StoresActions.getStores());
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  };
}

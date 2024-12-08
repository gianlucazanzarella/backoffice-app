import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '../../interfaces/store.interface';
import { StoresActions } from '../../state/actions/store.action';
import { StoreSelector } from '../../state/selectors/store.selector';

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
export class StoreListComponent implements OnInit {

  stores$: Observable<IStore[]> = this.store.select(StoreSelector.getStores);
  storesLoading$: Observable<boolean> = this.store.select(StoreSelector.getStoresLoading);

  displayedColumns: string[] = ['name', 'category', 'employees', 'actions'];

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(StoresActions.getStores());
  }
}

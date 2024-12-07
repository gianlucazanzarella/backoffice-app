import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UiSelector } from '../../../root-state/ui/selectors/ui.selector';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    CommonModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  isSidenavOpened$: Observable<boolean> = this.store.select(UiSelector.getIsSidenavOpened);

  constructor(
    private store: Store
  ) { }
}
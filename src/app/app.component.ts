import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UiActions } from './root-state/ui/actions/ui.action';
import { UiSelector } from './root-state/ui/selectors/ui.selector';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { SidenavComponent } from "./shared/components/sidenav/sidenav.component";
import { SnackbarComponent } from "./shared/components/snackbar/snackbar.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SidenavComponent,
    ProgressBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  snackbarMessage$: Observable<{ message: string; timestamp: number; }> = this.store.select(UiSelector.snackbarMessage);

  private _snackBar: MatSnackBar = inject(MatSnackBar);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.snackbarMessage$.subscribe(({ message, timestamp }) => {
      if (message) {
        this._snackBar.openFromComponent(SnackbarComponent, {
          duration: 2000,
          data: message
        });
      }
    });
  }

  toggleSidenav(): void {
    this.store.dispatch(UiActions.toggleSidenav());
  }
}

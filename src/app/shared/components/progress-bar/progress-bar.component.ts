import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UiSelector } from '../../../root-state/ui/selectors/ui.selector';

@Component({
  selector: 'app-progress-bar',
  imports: [
    CommonModule,
    MatProgressBar
  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  isProgressVisible$: Observable<boolean> = this.store.select(UiSelector.getIsProgressVisible);

  constructor(private store: Store) { }
}

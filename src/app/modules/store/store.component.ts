import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-store',
  imports: [
    RouterOutlet
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

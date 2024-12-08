import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

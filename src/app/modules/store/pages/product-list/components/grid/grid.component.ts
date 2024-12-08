import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IProduct } from '../../../../interfaces/product.interface';

@Component({
  selector: 'app-grid',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {

  @Output() deleteProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  @Input() products: IProduct[];

  expandedProducts: { [productId: string]: boolean; } = {};

  constructor() { }

  ngOnInit() {
  }

  toggleDescription(productId: string): void {
    this.expandedProducts[productId] = !this.expandedProducts[productId];
  }

  onDelete(product: IProduct): void {
    this.deleteProduct.emit(product);
  }

}

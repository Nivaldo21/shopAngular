import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import Product from '../../interfaces/product.interface';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatTooltipModule,MatIconModule,TruncatePipe],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})

export class CardProductComponent {
  @Input() product: Product | undefined;


}

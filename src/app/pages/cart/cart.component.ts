import { Component } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import Product from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { Cart } from '../../interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,MatDividerModule,MatListModule,MatIconModule,MatGridListModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cartService:CartServiceService){}

  cartItems:Product[] = [];
  ngOnInit(): void {
    this.cartService.cartList$.subscribe((cartItems:Product[])=>{
      this.cartItems = cartItems;
    });
  }
}

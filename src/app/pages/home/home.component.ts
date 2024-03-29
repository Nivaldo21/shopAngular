import { Component } from '@angular/core';
import { ApiProductsServiceService } from '../../services/api-products-service.service';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import Product from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProductComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private productService: ApiProductsServiceService){}

  products:Product[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((resp:Product[])=>{
      this.products = resp;
    });
  }
}

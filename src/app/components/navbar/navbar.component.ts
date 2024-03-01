import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import { CartServiceService } from '../../services/cart-service.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatButtonModule,MatToolbarModule,MatIconModule,MatBadgeModule,MatMenuModule,MatDividerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  itemsNumbers:number = 0;
  options:string[] = ['','/log-in','/sign-up','/','/cart'];

  constructor(private router: Router, private cartService:CartServiceService){
    this.cartService.cartList$.subscribe(cart => this.itemsNumbers = cart.length);
  }

  navigation(option:number = 0): void{
    this.router.navigateByUrl(this.options[option]);
  }
}

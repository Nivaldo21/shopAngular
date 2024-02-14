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


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatButtonModule,MatToolbarModule,MatIconModule,MatBadgeModule,MatMenuModule,MatDividerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router){}

  navigation(option:number = 0): void{
    if (option==1) this.router.navigateByUrl('/log-in') 
    if (option==2) this.router.navigateByUrl('/sign-up')
    if (option==3) this.router.navigateByUrl('/')
  }
}

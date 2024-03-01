import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { LogInComponent } from './pages/auth/log-in/log-in.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {path: '', loadComponent: ()=> HomeComponent, pathMatch: 'full'}, //home\
    {path: 'sign-up', loadComponent: ()=> SignUpComponent},
    {path: 'log-in', loadComponent: ()=> LogInComponent},
    {path: 'cart', loadComponent: ()=> CartComponent},
    { path: '**', redirectTo: '' } // Ruta por defecto en caso de que no coincida con ninguna ruta definida
];

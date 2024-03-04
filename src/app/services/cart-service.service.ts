import { Injectable } from '@angular/core';
import Product from '../interfaces/product.interface';
import { BehaviorSubject,Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private _cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private _snackBar: MatSnackBar) {}

  get cartList$(): Observable<Product[]> {
    return this._cartList.asObservable();
  }

  addToCart(product: Product): void {
    const updatedCartList = [...this._cartList.value, product];
    this._cartList.next(updatedCartList);
    this._snackBar.open("New Item in your Cart ✅ ",'',{duration: 5000});
  }

  removeToCart(product: Product): void {
    const updatedCartList = this._cartList.value.filter((objeto) => objeto.id !== product.id);
    this._cartList.next(updatedCartList);
    this._snackBar.open("Item Removed of your Cart ❌ ",'',{duration: 5000});
  }

}

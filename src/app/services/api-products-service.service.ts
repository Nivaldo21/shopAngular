import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsServiceService {

  constructor(private http:HttpClient) { }
  
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiBaseUrl}/products`);
  }
  
}

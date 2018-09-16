import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from "./product.model";
import { Category } from "./category.model";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private apiUrl = 'api/';

  constructor(private http: HttpClient) { }

  loadInitialProdutsData() {
    return this.http.get<Product[]>(`${this.apiUrl}products`);
  }  

  loadInitialCategoriesData() {
    return this.http.get<Category[]>(`${this.apiUrl}categories`);
  }
}

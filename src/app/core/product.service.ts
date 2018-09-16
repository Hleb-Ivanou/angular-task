import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Product } from "./product.model";
import {Observable} from 'rxjs';
import {BehaviorSubject } from 'rxjs';
import { DataProviderService } from "./data-provider.service";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private _products: BehaviorSubject<Product[]> = new BehaviorSubject([]);

    public readonly products: Observable<Product[]> = this._products.asObservable();

    constructor(private dataProviderService: DataProviderService) {
        this.dataProviderService.loadInitialProdutsData().subscribe(res => {this._products.next(res)});
    }

//   private apiUrl = 'api/products';

//   constructor(private http: HttpClient) {
//     this.loadInitialData();
//   }

//   loadInitialData() {
//     this.http.get<Product[]>(this.apiUrl).subscribe(res => {
//       this._products.next(res);
//     })
//   }

}

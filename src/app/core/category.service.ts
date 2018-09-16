import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from "./category.model";
import {Observable} from 'rxjs';
import {BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // categories: Category[] = []; 

  private apiUrl = 'api/categories';

  private dataSource = new BehaviorSubject(null);

  categories = this.dataSource.asObservable();

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl)
  }

  toggleCategory(category: Category) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const url = `${this.apiUrl}/${category.id}`;

    return this.http.put(url, category, httpOptions);
  }

  updatedData(categories: Category){
    this.dataSource.next(categories);
  }

}

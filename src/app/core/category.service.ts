import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from "./category.model";
import {Observable} from 'rxjs';
import {BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _categories: BehaviorSubject<Category[]> = new BehaviorSubject([]);

  public readonly categories: Observable<Category[]> = this._categories.asObservable();

  private apiUrl = 'api/categories';

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  loadInitialData() {
    this.http.get<Category[]>(this.apiUrl).subscribe(res => {
      this._categories.next(res);
    })
  }

  toggleCategory(toggleCategory: Category) {
    [...this._categories.getValue()].forEach(element => {
      if (element.id === toggleCategory.id) {
        element.isActive = !element.isActive;
      }
    });
    this._categories.next(this._categories.getValue());
  }

  activeAllCategories() {
    [...this._categories.getValue()].forEach(element => {element.isActive = true});
    this._categories.next(this._categories.getValue());
  }

}

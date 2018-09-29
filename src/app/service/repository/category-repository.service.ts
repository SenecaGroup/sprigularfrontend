import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CategoryRepository  {


  constructor(private http: Http) {
    // console.log(http == null ?  "test failed" : "good to go");
    // this.data = this.http.get('/entry')
    //   .map(res => res.json());
    // this.http.get('/about').subscribe();

  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8081/category');
  }

}

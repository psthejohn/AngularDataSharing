import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';
// import * as Rx from "rxjs/Rx";

import { Product } from './model/product'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://demo1168828.mockable.io/';
  httpHeader: any;
  constructor(private httpClient: HttpClient) {
    this.httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getProducts(): Observable<Product> {
    return this.httpClient.get<Product>(this.url + '/products').pipe(
      retry(1),  // Will retry once if unable to fetch data in first try 
      catchError(this.httpError)
    )
  }

  httpError(error: any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // Client Side Error
      msg = error.error.message;
    } else {
      // Server side error
      msg = 'Error code: ${error.status}\nMessage: ${error.message}';
    }
    console.log(msg);
    return throwError(msg);
  }
}
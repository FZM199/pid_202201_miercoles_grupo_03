import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment'
import { Visitante } from '../models/visitante.model';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  private BASE_URL = environment.URL_API_REST;

  constructor(private http: HttpClient) { }

  registerVisitor(visitor: Visitante): Observable<any> {
    return this.http.post(`${this.BASE_URL}/visitantes`, visitor);
  }
  getVisitors(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/visitantes`);
  }
}

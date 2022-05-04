import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Propietarios } from '../models/propietarios.model';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:8090/rest/propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private http:HttpClient) { }

  create(data:Propietarios):Observable<any>{
    return this.http.post(baseUrl,data);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';

const baseURL="http://localhost:8090/rest/departamento";
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http:HttpClient) { }

  listaDepartamento():Observable<Departamento[]>{
    return this.http.get<Departamento[]>(baseURL+"/listadepartamento");
  }
}

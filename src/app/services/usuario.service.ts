import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';
import { Usuario } from '../models/usuario.model';
import { AppSettings } from '../app.settings';

const baseURL="http://localhost:8090/rest/usuario";

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlUsuario= AppSettings.API_ENDPOINT+ '/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  listaUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(baseURL+"/listausuario");
  }

  
}

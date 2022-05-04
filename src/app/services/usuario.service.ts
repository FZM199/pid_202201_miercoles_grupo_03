import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Usuario } from '../models/usuario.model';

const baseURL="http://localhost:8090/rest/util";

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlUsuario= AppSettings.API_ENDPOINT+ '/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  listaUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(baseURL+"/listausuarios");
  }
}

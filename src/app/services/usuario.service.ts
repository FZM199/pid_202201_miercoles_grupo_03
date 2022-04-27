import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';
import { Usuario } from '../models/usuario.model';
import { AppSettings } from '../app.settings';

const baseURL="http://localhost:8090/rest/usuario";
=======
import { AppSettings } from '../app.settings';

>>>>>>> f1ad925358285ba0185d8eeb1d4b1c22324f77f8

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';
const baseUrlUsuario= AppSettings.API_ENDPOINT+ '/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
<<<<<<< HEAD

  listaUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(baseURL+"/listausuario");
  }

  
=======
>>>>>>> f1ad925358285ba0185d8eeb1d4b1c22324f77f8
}

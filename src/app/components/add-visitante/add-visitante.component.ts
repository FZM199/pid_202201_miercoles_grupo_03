import { Component, OnInit } from '@angular/core';
import { Propietarios } from 'src/app/models/propietarios.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Visitante } from 'src/app/models/visitante.model';
import { PropietarioService } from 'src/app/services/propietario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-add-visitante',
  templateUrl: './add-visitante.component.html',
  styleUrls: ['./add-visitante.component.css']
})
export class AddVisitanteComponent implements OnInit {

  propietarios : Propietarios[] = [];
  usuarios : Usuario[] = [];
  
  visitante:Visitante={

    idUsuario:{
      idUsuario: -1
    },
    codpropietario:{
      codpropietario: -1
    }

  }

  constructor(private usuarioService:UsuarioService,
              private propietarioService:PropietarioService,
              private visitanteService:VisitanteService) {

                this.usuarioService.listaUsuario().subscribe(
                  (u) => this.usuarios = u
                );

                this.propietarioService.listaPropietario().subscribe(
                  (p) => this.propietarios = p
                );
  }

  saveVisitante(){
    console.log(">>saveVisitante");
    console.log(this.visitante);
    this.visitanteService.create(this.visitante).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error =>{
        console.error(error);    
      },
    );
  }
  
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { Propietarios } from 'src/app/models/propietarios.model';
import { Usuario } from 'src/app/models/usuario.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-propietario',
  templateUrl: './add-propietario.component.html',
  styleUrls: ['./add-propietario.component.css']
})
export class AddPropietarioComponent implements OnInit {
  
  lstDepartamento: Departamento[]=[];

  lstUsuario: Usuario[]=[];

  propietario:Propietarios={
    departamento:{
      cod_departamento:-1
    },

    usuario:{
      idUsuario:-1
    }
   }
  
  constructor(private propietarioservice:PropietarioService,
    private departamentoservice:DepartamentoService,
    private usuarioservice:UsuarioService) {
      
      this.departamentoservice.listaDepartamento().subscribe(
          departamentos => this.lstDepartamento=departamentos
      );

      this.usuarioservice.listaUsuario().subscribe(
        usuarios=> this.lstUsuario=usuarios
      );
     }

  

 

  savePropietario(){
    console.log(">> savePropietario");
    console.log(this.propietario);

    this.propietarioservice.create(this.propietario).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error =>{
        console.log(error);
      },
    );
  }

  ngOnInit(): void {
  }

}

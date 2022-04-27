import { Component, NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddIncidenteComponent } from './components/add-incidente/add-incidente.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddServiciosComponent } from './components/add-servicios/add-servicios.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
/*{path:'',component:LoginComponent},*/

const routes: Routes = [
  {path:"addUsuario",component:AddUsuarioComponent },
  {path:"addPropietario",component:AddPropietarioComponent},
  {path:"addIncidente",component:AddIncidenteComponent},
  {path:"addServicio",component:AddServiciosComponent},
  {path:"addVisitante",component:AddVisitanteComponent},
  {path:"addDepartamento",component:AddDepartamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

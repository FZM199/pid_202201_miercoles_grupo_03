import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddIncidenteComponent } from './components/add-incidente/add-incidente.component';
import { AddServiciosComponent } from './components/add-servicios/add-servicios.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {path:"add-usuario",component:AddUsuarioComponent },
  {path:"add-propietario",component:AddPropietarioComponent },
  {path:"add-incidente",component:AddIncidenteComponent },
  {path:"add-servicios",component:AddServiciosComponent },
  {path:"add-mascota",component:AddMascotaComponent },
  {path:"add-visitante",component:AddVisitanteComponent },
  {path:"add-departamento",component:AddDepartamentoComponent },

  { path: '', component: IndexComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

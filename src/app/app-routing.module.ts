import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {path:"add-usuario",component:AddUsuarioComponent },

  { path: '', component: IndexComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';

=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> f1ad925358285ba0185d8eeb1d4b1c22324f77f8

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { AddIncidenteComponent } from './components/add-incidente/add-incidente.component';
import { AddServiciosComponent } from './components/add-servicios/add-servicios.component';
<<<<<<< HEAD
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { LoginComponent } from './components/login/login.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { RouterModule } from '@angular/router';
=======
>>>>>>> f1ad925358285ba0185d8eeb1d4b1c22324f77f8


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    IndexComponent,
    AddDepartamentoComponent,
    AddMascotaComponent,
    AddPropietarioComponent,
    AddVisitanteComponent,
<<<<<<< HEAD
    AddDepartamentoComponent,
    LoginComponent,
    AddMascotaComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
=======
    AddIncidenteComponent,
    AddServiciosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
>>>>>>> f1ad925358285ba0185d8eeb1d4b1c22324f77f8
    AppRoutingModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

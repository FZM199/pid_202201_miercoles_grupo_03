import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AddIncidenteComponent,
    AddServiciosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

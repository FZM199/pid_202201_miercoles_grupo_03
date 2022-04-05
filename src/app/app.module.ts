import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddIncidenteComponent } from './components/add-incidente/add-incidente.component';
import { AddServiciosComponent } from './components/add-servicios/add-servicios.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUsuarioComponent,
    AddPropietarioComponent,
    AddIncidenteComponent,
    AddServiciosComponent,
    AddVisitanteComponent,
    AddDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

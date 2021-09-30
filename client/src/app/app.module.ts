import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Services
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';
import { ClienteService } from './services/cliente.service';
import { NavegacionComponent } from './navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    ListarComponent,
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

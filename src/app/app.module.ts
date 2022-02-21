import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';


import { HttpClientModule } from '@angular/common/http';
import { FormLibroComponent } from './libros/form-libro/form-libro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUsuarioComponent } from './Usuarios/form-usuario/form-usuario.component';
import { ListaUsuariosComponent } from './Usuarios/lista-usuarios/lista-usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    FormLibroComponent,
    FormUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { FormLibroComponent } from './libros/form-libro/form-libro.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './Usuarios/lista-usuarios/lista-usuarios.component';
import { FormUsuarioComponent } from './Usuarios/form-usuario/form-usuario.component';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';







@NgModule({
  declarations: [
    ListaLibrosComponent,
    FormLibroComponent,
   ListaUsuariosComponent,
   FormUsuarioComponent,
   AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }

import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLibroComponent } from './libros/form-libro/form-libro.component';
import { ListaUsuariosComponent } from './Usuarios/lista-usuarios/lista-usuarios.component';
import { FormUsuarioComponent } from './Usuarios/form-usuario/form-usuario.component';

const routes: Routes = [
  {
    path: 'libros',
    component: ListaLibrosComponent
  },
  {
    path: 'libros/nuevo',
    component : FormLibroComponent
  },
  {
    path: 'libros/:id/editar',
    component : FormLibroComponent
  },
  {
    path: 'usuarios',
    component : ListaUsuariosComponent
  },

  {
    path: 'usuarios/nuevo',
    component : FormUsuarioComponent
  },
  {
    path: 'usuarios/:id/editar',
    component : FormUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

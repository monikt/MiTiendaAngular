import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormLibroComponent } from "./libros/form-libro/form-libro.component";
import { ListaLibrosComponent } from "./libros/lista-libros/lista-libros.component";
import { FormUsuarioComponent } from "./Usuarios/form-usuario/form-usuario.component";
import { ListaUsuariosComponent } from "./Usuarios/lista-usuarios/lista-usuarios.component";
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [


  {
    path: '',
    component: AdminLayoutComponent,
    children :[
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
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


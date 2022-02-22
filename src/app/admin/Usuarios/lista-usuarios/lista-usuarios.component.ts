import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Usuario, UsuarioPage } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styles: [
  ]
})
export class ListaUsuariosComponent implements OnInit {

  usuarios?: Usuario[];
  usuariosPage?: UsuarioPage;
  displayedColumns: string[] = ['nombres', 'email', 'rol', 'fechaCreacion', 'fechaActualizacion','acciones'];
  constructor(
    private usuarioservice: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.usuarioservice.paginar()
    .subscribe(usuarioPage => {
      this.usuariosPage = usuarioPage;
    })
  }

  eliminar(usuario: Usuario) {

    if (window.confirm("¿Estás seguro de eliminar este Usuario?")) {

      this.usuarioservice.eliminar(usuario.id)
        .subscribe(() => {
          this.getAll()
        })
      window.alert("Se ha eliminado de manera correcta el libro")
    }
  }
  paginarUsuarios(event: PageEvent) {
    const page = event.pageIndex;
    const size = event.pageSize;

    this.usuarioservice.paginar(size, page)
      .subscribe(usuarioPage => {
        this.usuariosPage = usuarioPage;
      })
  }
}

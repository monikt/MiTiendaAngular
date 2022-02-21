import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styles: [
  ]
})
export class ListaUsuariosComponent implements OnInit {

  usuarios?: Usuario[];
  constructor(
    private usuarioservice: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.usuarioservice.listar()
      .subscribe(usuarios => {
        console.log('Usuarios recibidos', usuarios);
        this.usuarios = usuarios;
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
}

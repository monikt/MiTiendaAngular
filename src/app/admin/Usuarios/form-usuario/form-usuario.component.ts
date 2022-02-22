import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Rol, Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styles: [
  ]
})

export class FormUsuarioComponent implements OnInit {
  formulario?: FormGroup;
  errors: any;
  usuario?: Usuario;

  roles: Rol[] = [
    {value: 'ADMIN', viewValue: 'ADMIN'},
    {value: 'LECTOR', viewValue: 'LECTOR'}
  ];


  constructor(
    private fb: FormBuilder,
    private usuarioservice: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {

    const idUsuario = this.route.snapshot.paramMap.get('id');

    if (idUsuario) {
      this.usuarioservice.obtener(parseInt(idUsuario))
        .subscribe(usuario => {
          this.usuario = usuario;

          this.formulario = this.fb.group({
            nombres: [usuario.nombres, [Validators.required, Validators.minLength(3), Validators.maxLength(30)], []],
            apellidos: [usuario.apellidos, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            email: [usuario.email, [Validators.required, Validators.pattern("^.+@.+\..+$")]],
            password: [usuario.password, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
            rol: [usuario.rol, [Validators.required]],
          });
        })
    } else {
      this.formulario = this.fb.group({
        nombres: [, [Validators.required, Validators.minLength(3), Validators.maxLength(30)], []],
        apellidos: [, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        email: [, [Validators.required, Validators.pattern("^.+@.+\..+$")]],
        password: [, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
        rol: [, [Validators.required]]
      });
    }
  }

  controlTieneError(control: string, error: string) {
    return this.formulario?.controls[control].hasError(error);
  }

  guardar() {
    console.log("aqui llega");
    if (this.formulario?.invalid) {
      return;
    }

    const usuario = this.formulario?.value;



    let request;

    if ( this.usuario) {
      request = this.usuarioservice.actualizar(this.usuario.id, usuario);
    } else {
      request = this.usuarioservice.crear(usuario);
    }

    request
      .subscribe({
        next: usuario => {
          this.router.navigate(['/admin/usuarios']);
        },
        error: error => {
          this.errors = error.error.errors;
        }
      })
  }

}

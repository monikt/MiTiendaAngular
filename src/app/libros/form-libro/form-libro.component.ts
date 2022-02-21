
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../shared/ibro.model';
import { LibroService } from '../shared/libro.service';


@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styles: [
  ]
})
export class FormLibroComponent implements OnInit {
  formulario?: FormGroup;
  errors: any;
  libro?: Libro;


  constructor(
    private fb: FormBuilder,
    private libroService: LibroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    const idLibro = this.route.snapshot.paramMap.get('id');

    if (idLibro) {
      this.libroService.obtener(parseInt(idLibro))
        .subscribe(libro => {
          this.libro = libro;

          this.formulario = this.fb.group({
            titulo: [libro.titulo, [Validators.required, Validators.minLength(3), Validators.maxLength(100)], []],
            slug: [libro.slug, [Validators.required, Validators.pattern('[a-z0-9-]+')]],
            descripcion: [libro.descripcion, [Validators.required]],
            precio: [libro.precio, [Validators.required, Validators.min(0)]]
          });
        })
    } else {
      this.formulario = this.fb.group({
        titulo: [, [Validators.required, Validators.minLength(3), Validators.maxLength(100)], []],
        slug: [, [Validators.required, Validators.pattern('[a-z0-9-]+')]],
        descripcion: [, [Validators.required]],
        precio: [, [Validators.required, Validators.min(0)]]
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

    const libro = this.formulario?.value;

    libro.rutaArchivo = 'abc.pdf';
    libro.rutaPortada = 'abc.jpg';

    let request;

    if (this.libro) {
      request = this.libroService.actualizar(this.libro.id, libro);
    } else {
      request = this.libroService.crear(libro);

    }

    request
      .subscribe({
        next: libro => {
          this.router.navigate(['/libros']);
        },
        error: error => {
          this.errors = error.error.errors;
        }
      })
  }

}

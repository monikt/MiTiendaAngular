import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioPage } from './usuario.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.apiBase}/admin/usuarios/listar`);
  }
  paginar( size: number = 5, page: number = 0) :Observable<UsuarioPage>{
    let params = new HttpParams();
    params = params.append('size',size);
    params = params.append('page',page);
    params = params.append('sort','fechaCreacion,desc');
    return this.http.get<UsuarioPage>(`${environment.apiBase}/admin/usuarios`,{params: params});

  }
  obtener(id: number) :Observable <Usuario>{
    return this.http.get<Usuario>(`${environment.apiBase}/admin/usuarios/${id}`);
  }

  crear(usuario:Usuario) :Observable <Usuario> {
    return this.http.post<Usuario>(`${environment.apiBase}/admin/usuarios/`,usuario);
  }
  actualizar(id: number, usuario:Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${environment.apiBase}/admin/usuarios/${id}`,usuario);
  }
  eliminar(id: number):Observable<Object>{
    return this.http.delete<Usuario>(`${environment.apiBase}/admin/usuarios/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Alumno } from './alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private urlAlumno: string = 'http://localhost:8080/api/Alumnos';

  constructor(private http: HttpClient) {}
  getAlumnos(): Observable<Alumno[]> {
    return this.http
      .get(this.urlAlumno)
      .pipe(map((respuesta) => respuesta as Alumno[]));
  }
}

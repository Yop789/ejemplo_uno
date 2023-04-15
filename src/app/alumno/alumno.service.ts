import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Alumno } from './alumno';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private heders = new HttpHeaders({'content-type':'application/json'})
  private urlAlumno: string = 'http://localhost:8080/api/Alumnos';

  constructor(private http: HttpClient) {}
  getAlumnos(): Observable<Alumno[]> {
    return this.http
      .get(this.urlAlumno)
      .pipe(map((respuesta) => respuesta as Alumno[]));
  }
  guardar(alumno: Alumno):Observable<Alumno>{
    return this.http
      .post(this.urlAlumno,alumno,{headers : this.heders}).pipe(map((respuesta:any) => respuesta.alumno as Alumno),
      catchError(e => {
        if(e.status==400){
          console.log(e)
          return throwError(()=>e) 
        }
        Swal.fire(e.error.mensaje,e.error.error,"error" );
        console.log(e)
        return throwError(()=>e)
      } ));
    }
      
}

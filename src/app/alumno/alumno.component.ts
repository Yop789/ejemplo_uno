import { AlumnoService } from './alumno.service';
import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
  alumnos: Alumno[];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService
      .getAlumnos()
      .subscribe((respuestq) => {this.alumnos = respuestq});
  }
}

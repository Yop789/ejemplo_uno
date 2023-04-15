
import { Router, Routes } from '@angular/router';
import { AlumnoService } from './alumno.service';
import { Alumno } from './alumno';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
 public alumno:Alumno = new Alumno();

  public errores :string[];

  constructor(private alumnoService: AlumnoService, private router:Router){

  }
  guardar(){
    this.alumnoService.guardar(this.alumno).subscribe({
      next : alumno=>{
        this.router.navigateByUrl("/alumnos");
        Swal.fire("Alumno nuevo", `el alumno: ${alumno.nombre} se guardo con exito`,"success");
      },
      error: e =>{
        this.errores= e.error.errores as string[];
      }
    })
  }
}

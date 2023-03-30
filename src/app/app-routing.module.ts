import { AlumnoComponent } from './alumno/alumno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",redirectTo:"/alumnos",pathMatch:"full"
  },
  {
    path:"alumnos",component:AlumnoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
